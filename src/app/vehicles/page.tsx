"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { getVehicleTypes } from "../api/apiService";
import { VehicleType } from "../api/types";

export default function VehiclesPage() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref para o dropdown
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [filteredVehicleTypes, setFilteredVehicleTypes] = useState<VehicleType[]>([]);
  const [selectedType, setSelectedType] = useState<number | undefined>(
    undefined
  );
  const [selectedYear, setSelectedYear] = useState<number | undefined>(
    undefined
  );
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      try {
        const data = await getVehicleTypes();
        setVehicleTypes(data.Results);
        setFilteredVehicleTypes(data.Results);
      } catch (error) {
        console.error("Erro ao buscar tipos de veículos:", error);
      }
    };

    fetchVehicleTypes();
  }, []);

  useEffect(() => {
    setIsButtonEnabled(!!selectedType && !!selectedYear);
  }, [selectedType, selectedYear]);

  useEffect(() => {
    setFilteredVehicleTypes(
      vehicleTypes.filter((type) =>
        type.MakeName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, vehicleTypes]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNextClick = () => {
    if (selectedType && selectedYear) {
      router.push(`/result/${selectedType}/${selectedYear}`);
    }
  };

  const handleTypeClick = (typeId: number) => {
    setSelectedType(typeId);
    setIsDropdownOpen(false); 
  };

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-neutral-100 w-full max-w-[90vw] mt-5 rounded-md shadow-sm px-2 pt-1 pb-2 min-h-[60vh] flex flex-col gap-5 justify-center align-middle items-center text-neutral-700">
        <div className="w-full max-w-[96%] flex flex-col gap-5">
          <h2 className="font-semibold text-neutral-700 text-lg">
            Filter Vehicles
          </h2>
          <div className="w-full flex flex-col gap-5">
            <div className="text-neutral-700 font-semibold mb-1">Vehicle Type</div>
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`cursor-pointer p-2 border rounded-md ${
                  selectedType ? "bg-orange-200 border-orange-400" : "bg-neutral-50 border-neutral-300"
                }`}
              >
                {vehicleTypes.find((type) => type.MakeId === selectedType)?.MakeName || "Select Vehicle Type"}
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full max-h-48 overflow-y-auto bg-neutral-50 border border-neutral-300 rounded-md shadow-lg z-10">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border-b border-neutral-300 w-full rounded-t-md"
                  />
                  {filteredVehicleTypes.length > 0 ? (
                    filteredVehicleTypes.map((type) => (
                      <div
                        key={type.MakeId}
                        onClick={() => handleTypeClick(type.MakeId)}
                        className={`cursor-pointer p-2 border-b last:border-b-0 ${
                          selectedType === type.MakeId
                            ? "bg-orange-200 border-orange-400"
                            : "bg-neutral-50 border-neutral-300"
                        }`}
                      >
                        {type.MakeName}
                      </div>
                    ))
                  ) : (
                    <div className="p-2">No results</div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="text-neutral-700 font-semibold mb-1">Year</div>
            <div className="flex flex-wrap gap-2">
              {Array.from(
                { length: new Date().getFullYear() - 2014 },
                (_, i) => 2015 + i
              ).map((year) => (
                <div
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className={`cursor-pointer p-2 border rounded-md ${
                    selectedYear === year
                      ? "bg-orange-200 border-orange-400"
                      : "bg-neutral-50 border-neutral-300"
                  }`}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
            <button
              onClick={handleNextClick}
              disabled={!isButtonEnabled}
              className="p-1 bg-neutral-50 border-2 border-neutral-400 shadow-md rounded-md text-orange-600 font-semibold hover:font-bold hover:bg-orange-50 w-full max-w-[250px] mx-auto"
            >
              Next
            </button>
        </div>
      </div>
    </div>
  );
}
