import { useMutation } from "@tanstack/vue-query";
import { authApi } from "./api";
import { TLogin, TRegister } from "./type";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["post-login"],
    mutationFn: async (data: TLogin) => await authApi.postLogin(data),
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: ["post-register"],
    mutationFn: async (data: TRegister) => await authApi.postRegister(data),
  });
};
