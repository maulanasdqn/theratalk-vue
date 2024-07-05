import { TDataResponse } from "@/utils/type";

export type TLoginRequest = { email: string; password: string };

export type TLoginItem = {
  user: TLoginRequest;
  token: {
    accessToken: string;
    refreshToken: string;
  };
};

export type TRegisterRequest = {
  email: string;
  password: string;
  confirmPassword: string;
  fullname: string;
  address: string;
};

export type TLoginResponse = TDataResponse<TLoginItem>;
export type TRegisterResponse = TDataResponse;
