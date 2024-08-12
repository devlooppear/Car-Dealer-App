import axios, { AxiosInstance } from "axios";
import { VehicleModelsResponse, VehicleTypesResponse } from "./types";

const apiService: AxiosInstance = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});



export const getVehicleTypes = async () => {
  try {
    const response = await apiService.get(
      "/vehicles/GetMakesForVehicleType/car?format=json"
    );
    return response.data as VehicleTypesResponse;
  } catch (error) {
    console.error("Erro ao buscar tipos de veículos:", error);
    throw error;
  }
};

export const getVehicleModels = async (makeName: string, year: string) => {
  try {
    const response = await apiService.get(
      `/vehicles/GetModelsForMakeIdYear/makeId/${makeName}/modelyear/${year}?format=json`
    );
    return response.data as VehicleModelsResponse;
  } catch (error) {
    console.error("Erro ao buscar modelos de veículos:", error);
    throw error;
  }
};

export default apiService;
