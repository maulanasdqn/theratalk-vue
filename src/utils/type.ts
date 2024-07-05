import { AxiosError } from "axios";

export type TErrorItem = {
  code: string;
  message: string;
};

export type TErrorResponse<E = TErrorItem> = AxiosError<E>;

export type TDataResponse<T = unknown> = {
  message: string;
  data: T;
};
