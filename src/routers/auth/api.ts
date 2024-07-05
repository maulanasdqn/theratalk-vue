import { api } from "../../libs/axios";
import { TLogin, TRegister } from "./type";

export const authApi = {
  postLogin: async (payload: TLogin) => {
    try {
      const { data } = await api({
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

  postRegister: async (payload: TRegister) => {
    try {
      const { data } = await api({
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
