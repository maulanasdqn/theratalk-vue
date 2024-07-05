import { api } from "@/libs/axios";
import {
  TLoginRequest,
  TRegisterRequest,
  TRegisterResponse,
  TLoginResponse,
} from "./type";

export const authApi = {
  postLogin: async (payload: TLoginRequest): Promise<TLoginResponse> => {
    try {
      const { data } = await api<TLoginResponse>({
        url: "/auth/login",
        method: "POST",
        data: {
          email: payload.email,
          password: payload.password,
        },
      });
      return data;
    } catch (e) {
      throw e;
    }
  },

  postRegister: async (
    payload: TRegisterRequest,
  ): Promise<TRegisterResponse> => {
    try {
      const { data } = await api<TRegisterResponse>({
        url: "/auth/register",
        method: "POST",
        data: {
          email: payload.email,
          password: payload.password,
          address: payload.address,
          fullname: payload.fullname,
          confirmPassword: payload.confirmPassword,
        },
      });
      return data;
    } catch (e) {
      throw e;
    }
  },
};
