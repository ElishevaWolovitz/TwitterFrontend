import type { AxiosInstance } from "axios";

export type ShmoozerPageProps = {
  api: AxiosInstance;
};

export type ShmoozerType = {
  _id: string;
  shmoozerName: string;
  displayName: string;
};