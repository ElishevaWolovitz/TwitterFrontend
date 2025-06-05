import type { AxiosInstance } from "axios";

export type KibPageProps = {
  api: AxiosInstance;
};


export type KibType = {
  _id: string;
  kibName: string;
  shmoozerId: string;
  text: string;
  media?: string;
  likes?: number;
  createdAt?: Date;
};