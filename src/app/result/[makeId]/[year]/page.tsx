"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getVehicleModels } from "@/app/api/apiService";
import { VehicleModel, VehicleModelsResponse } from "@/app/api/types";

export default function ResultPage() {
  const { makeId, year } = useParams<{ makeId: string; year: string }>();
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!makeId || !year) return;

    const fetchModels = async () => {
      try {
        console.log("makeId:", makeId);
        const data: VehicleModelsResponse = await getVehicleModels(
          makeId,
          year
        );
        setModels(data.Results);
      } catch (error) {
        setError("Erro ao buscar modelos de veículos");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, [makeId, year]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex justify-center">
      <div className="bg-neutral-100 w-full max-w-[90vw] mt-5 rounded-md shadow-sm px-2 pt-1 pb-2 min-h-[60vh] flex flex-col gap-5 justify-center items-center text-neutral-700">
        <h2 className="font-semibold text-neutral-700 text-lg">
          Models for {makeId} ({year})
        </h2>
        <table className="w-full bg-white rounded-md shadow max-w-[96%]">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Model ID</th>
              <th className="py-2 px-4 border-b text-left">Model Name</th>
              <th className="py-2 px-4 border-b text-left">Make Name</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.Model_ID}>
                <td className="py-2 px-4 border-b">{model.Model_ID}</td>
                <td className="py-2 px-4 border-b">{model.Model_Name}</td>
                <td className="py-2 px-4 border-b">{model.Make_Name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
