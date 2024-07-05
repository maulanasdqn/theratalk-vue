import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { formHelper } from "@/utils/form";
import { useLoginMutation, useRegisterMutation } from "./mutation";
import { useLoginValidate, useRegisterValidate } from "./schema";
import { TLoginRequest, TRegisterRequest } from "./type";

export const useLoginForm = defineStore("login", () => {
  const form = ref(
    formHelper<TLoginRequest>({
      email: "",
      password: "",
    }),
  );

  const validate = useLoginValidate(form.value);
  const { mutate, isPending } = useLoginMutation();

  const watchCallback = async () => {
    await validate.value.$validate();
    form.value.state.isValid = !validate.value.$invalid;
    form.value.state.isDirty = validate.value.$dirty;
    form.value.state.error.email = validate.value.email.$errors[0]
      ?.$message as string;
    form.value.state.error.password = validate.value.password.$errors[0]
      ?.$message as string;
  };

  watch(form.value, watchCallback, { deep: true });

  const onSubmit = () =>
    mutate(form.value, {
      onError: (e) => alert(e.message),
      onSuccess: () => alert("Login successfully"),
    });

  return { form, onSubmit, isPending };
});

export const useRegisterForm = defineStore("register", () => {
  const form = ref(
    formHelper<TRegisterRequest>({
      email: "",
      password: "",
      address: "",
      confirmPassword: "",
      fullname: "",
    }),
  );

  const validate = useRegisterValidate(form.value);
  const { mutate, isPending } = useRegisterMutation();

  const watchCallback = async () => {
    await validate.value.$validate();
    form.value.state.isValid = !validate.value.$invalid;
    form.value.state.isDirty = validate.value.$dirty;
    form.value.state.error.fullname = validate.value.fullname.$errors[0]
      ?.$message as string;
    form.value.state.error.address = validate.value.address.$errors[0]
      ?.$message as string;
    form.value.state.error.email = validate.value.email.$errors[0]
      ?.$message as string;
    form.value.state.error.password = validate.value.password.$errors[0]
      ?.$message as string;
    form.value.state.error.confirmPassword = validate.value.confirmPassword
      .$errors[0]?.$message as string;
  };

  watch(form.value, watchCallback, { deep: true });

  const onSubmit = () =>
    mutate(form.value, {
      onError: (e) => alert(e.message),
      onSuccess: () => alert("Register successfully"),
    });

  return { form, onSubmit, isPending };
});
