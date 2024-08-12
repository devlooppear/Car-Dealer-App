"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getVehicleTypes } from "../api/apiService";
import { VehicleType } from "../api/types";

export default function VehiclesPage() {
  const router = useRouter();
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [selectedType, setSelectedType] = useState<number | undefined>(
    undefined
  );
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  );
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const data = await getVehicleTypes();
        setVehicleTypes(data.Results);
      } catch (error) {
        console.error("Erro ao buscar tipos de veículos:", error);
      }
    };

    fetchVehicleTypes();
  }, []);

  useEffect(() => {
    setIsButtonEnabled(!!selectedType && !!selectedYear);
  }, [selectedType, selectedYear]);

  const handleNextClick = () => {
    if (selectedType && selectedYear) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-neutral-100 w-full max-w-[90vw] mt-5 rounded-md shadow-sm px-2 pt-1 pb-2 min-h-[60vh] flex flex-col gap-5 justify-center align-middle items-center text-neutral-700">
        <h2 className="font-semibold text-neutral-700 text-lg">
          Filter Vehicles
        </h2>
        <select
          onChange={(e) => setSelectedType(Number(e.target.value))}
          className="p-2 border rounded text-neutral-700"
          value={selectedType || ""}
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes.length > 0 ? (
            vehicleTypes.map((type) => (
              <option key={type.MakeId} value={type.MakeId}>
                {type.MakeName}
              </option>
            ))
          ) : (
            <option disabled>Loading...</option>
          )}
        </select>
        <select
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="p-2 border rounded"
          value={selectedYear || ""}
        >
          <option value="">Select Year</option>
          {Array.from(
            { length: new Date().getFullYear() - 2014 },
            (_, i) => 2015 + i
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button
          onClick={handleNextClick}
          disabled={!isButtonEnabled}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
