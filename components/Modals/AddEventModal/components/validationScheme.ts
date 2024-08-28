import * as yup from "yup";

export const validationSchema = () => {
  return yup.object({
    title: yup
      .string()
      .required("This field is required")
      .trim()
      .min(2, "Invalid event name minimum 2 chars")
      .max(200, "Invalid event name maximum 200 chars"),

    category: yup.string().required("This field is required"),

    dateOfEvent: yup.string().required("This field is required"),

    place: yup
      .string()
      .required("This field is required")
      .trim()
      .min(2, "Invalid event place minimum 2 chars")
      .max(20, "Invalid event place maximum 20 chars"),

    description: yup
      .string()
      .required("This field is required")
      .trim()
      .min(2, "Invalid event description minimum 2 chars")
      .max(200, "Invalid event description maximum 200 chars"),
  });
};
