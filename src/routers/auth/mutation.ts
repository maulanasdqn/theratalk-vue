import { useMutation, UseMutationReturnType } from "@tanstack/vue-query";
import { authApi } from "./api";
import {
  TLoginRequest,
  TRegisterRequest,
  TRegisterResponse,
  TLoginResponse,
} from "./type";
import { TErrorResponse } from "../../utils/type";

export const useLoginMutation = (): UseMutationReturnType<
  TLoginResponse,
  TErrorResponse,
  TLoginRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-login"],
    mutationFn: async (payload) => await authApi.postLogin(payload),
  });
};

export const useRegisterMutation = (): UseMutationReturnType<
  TRegisterResponse,
  TErrorResponse,
  TRegisterRequest,
  unknown
> => {
  return useMutation({
    mutationKey: ["post-register"],
    mutationFn: async (payload) => await authApi.postRegister(payload),
  });
};
