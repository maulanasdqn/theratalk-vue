import {
  email,
  helpers,
  minLength,
  required,
  sameAs,
} from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import { TLoginRequest, TRegisterRequest } from "./type";

const loginRules = {
  email: {
    required: helpers.withMessage("Email is required", required),
    email: helpers.withMessage("Email must be valid", email),
    $lazy: true,
  },
  password: {
    required: helpers.withMessage("Password is required", required),
    minLength: helpers.withMessage(
      "Password must be at least 8 characters",
      minLength(8),
    ),
    $lazy: true,
  },
};

const registerRules = {
  fullname: {
    required: helpers.withMessage("Fullname is required", required),
    $lazy: true,
  },
  address: {
    required: helpers.withMessage("Address is required", required),
    $lazy: true,
  },
  email: {
    email: helpers.withMessage("Email must be valid", email),
    required: helpers.withMessage("Email is required", required),
    $lazy: true,
  },
  password: {
    minLength: helpers.withMessage(
      "Password must be at least 8 characters",
      minLength(8),
    ),
    required: helpers.withMessage("Password is required", required),
    $lazy: true,
  },
  confirmPassword: {
    required: helpers.withMessage("Confirm password is required", required),
    sameAsPassword: helpers.withMessage(
      "Confirm password must be same as password",
      sameAs("password"),
    ),
    $lazy: true,
  },
};

export const useLoginValidate = (payload: TLoginRequest) =>
  useValidate(loginRules, payload);

export const useRegisterValidate = (payload: TRegisterRequest) =>
  useValidate(registerRules, payload);
