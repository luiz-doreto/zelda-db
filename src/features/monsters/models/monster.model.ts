export interface IApiResponse {
  message: string;
  status: number;
}

export interface IMonsters extends IApiResponse {
  data: Monster[];
};

export interface Monster {
  category: string;
  common_locations: string[] | null;
  description: string;
  dlc: boolean;
  drops: string[] | null;
  id: number;
  image: string;
  name: string;
}
