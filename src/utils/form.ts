export const formHelper = <T = unknown>(form: T) => {
  return {
    ...form,
    state: {
      isValid: false,
      isDirty: false,
      error: {
        ...form,
      },
    },
  };
};
