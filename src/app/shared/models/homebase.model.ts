export interface IHomeBase {
  id: string;
  homebaseName: string;
  country?: {
    id: number;
    name: string;
    status: string;
  };
}
