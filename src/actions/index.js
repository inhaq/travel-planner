export const GET_FORM_DATA = "GET_FORM_DATA";

export const getFormData = (form) => {
  return {
    type: GET_FORM_DATA,
    payload:
    form
  };
};
