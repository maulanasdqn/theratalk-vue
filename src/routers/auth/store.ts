import { defineStore } from "pinia";
import { ref, watch } from "vue";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { formHelper } from "../../utils/form";

export const useLoginStore = defineStore("login", () => {
  const form = ref(
    formHelper({
      email: "",
      password: "",
    }),
  );

  const rules = {
    email: {
      email: {
        ...email,
        $message: "Email must be valid",
      },
      required: {
        ...required,
        $message: "Email is required",
      },
    },
    password: {
      minLength: {
        ...minLength(8),
        $message: "Password must be at least 8 characters",
      },
      required: {
        ...required,
        $message: "Password is required",
      },
    },
  };

  const validate = useValidate(rules, form.value);

  const subscribe = async () => {
    await validate.value.$validate();
    form.value.state.isValid = !validate.value.$invalid;
    form.value.state.isDirty = validate.value.$dirty;
    form.value.state.error.email = validate.value.email.$errors[0]
      ?.$message as string;
    form.value.state.error.password = validate.value.password.$errors[0]
      ?.$message as string;
  };

  watch(form.value, subscribe);

  const login = async () => {
    await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.value.email,
        password: form.value.password,
      }),
    });
  };

  return { form, login };
});
