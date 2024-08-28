import { Box, Button } from "@mui/material";
import { useForm, useFormState } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addServiceModal,
  removeServiceModal,
} from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { ServiceModalName } from "@/enums";
import { useDispatch } from "react-redux";
import { validationSchema } from "./validationScheme";
import { AddEventFormView } from "./AddEventFormView";

type FormData = yup.InferType<ReturnType<typeof validationSchema>>;

interface AddFormFormProps {
  eventId?: string;
}

export const AddEventForm = ({ eventId }: AddFormFormProps) => {
  const dispatch = useDispatch();

  const defaultValues: FormData = {
    title: "",
    category: "",
    place: "",
    dateOfEvent: "",
    description: "",
  };

  const { handleSubmit, control, watch, setError, clearErrors, resetField } =
    useForm<FormData>({
      defaultValues,
      resolver: yupResolver(validationSchema()),
      mode: "onChange",
    });

  const { isDirty, dirtyFields, isValid, errors } = useFormState({ control });

  const handleOnCancel = () => {
    // if (isDirty) {
    //   dispatch(
    //     addServiceModal({
    //       type: ServiceModalName.AddEvent,
    //     })
    //   );
    // } else {
    //   dispatch(removeServiceModal(ServiceModalName.AddEvent));
    // }
    dispatch(removeServiceModal(ServiceModalName.AddEvent));
  };

  const handleFormSubmit: SubmitHandler<FormData> = (event) => {
    console.log(event);
    dispatch(removeServiceModal(ServiceModalName.AddEvent));

    if (eventId) {
      // make patch request to update event by eventId
      dispatch(removeServiceModal(ServiceModalName.EditEvent));
    } else {
      // make post request to create new event
      dispatch(removeServiceModal(ServiceModalName.AddEvent));
    }
  };

  return (
    <Box>
      <Box>
        <AddEventFormView control={control} />

        <Box
          sx={{ display: "flex", justifyContent: "flex-start", gap: "24px" }}
        >
          <Button
            onClick={handleOnCancel}
            type="button"
            variant="outlined"
            color="primary"
            sx={{
              width: "50%",
              textTransform: "capitalize",
              borderRadius: "8px",
              padding: "10px 18px",
              borderColor: "palette.primary.main",
              "&:hover": {
                borderColor: "border.hover",
                backgroundColor: "rgba(56, 65, 155, 0.10)",
                color: "border.hover",
              },
              "&:disabled": {
                borderColor: "action.disabled",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit(handleFormSubmit)}
            disabled={!isValid || !isDirty}
            sx={{
              width: "50%",
              textTransform: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              "&:hover": {
                backgroundColor: "custom.buttonContainedHover",
              },
              "&:disabled": {
                color: "common.white",
                backgroundColor: "action.disabled",
              },
            }}
          >
            {eventId ? "Save" : "Add"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
