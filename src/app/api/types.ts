export interface VehicleModel {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface VehicleModelsResponse {
  Results: VehicleModel[];
}

export interface VehicleType {
  MakeName: string;
  MakeId: number;
}

export interface VehicleTypesResponse {
  Results: VehicleType[];
}
