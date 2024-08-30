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
import {
  createEvent,
  fetchEventById,
  updateEventById,
} from "@/redux/slices/eventSlice";
import { AppDispatch } from "@/redux/store";
import { formatISO } from "date-fns";
import { selectEventData, selectEventDataLoading } from "@/redux/selectors";
import { useEffect, useRef } from "react";

type FormData = yup.InferType<ReturnType<typeof validationSchema>>;

interface AddFormFormProps {
  eventId?: string;
}

export const AddEventForm = ({ eventId }: AddFormFormProps) => {
  const eventData = selectEventData();
  const isLoading = selectEventDataLoading();
  const dispatch = useDispatch<AppDispatch>();

  const defaultValues: FormData = {
    title: "",
    category: "",
    place: "",
    dateOfEvent: "",
    description: "",
  };

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    setError,
    clearErrors,
    resetField,
    reset,
  } = useForm<FormData>({
    defaultValues,
    resolver: yupResolver(validationSchema()),
    mode: "onChange",
  });

  const initialValuesRef = useRef<FormData | null>(null);

  useEffect(() => {
    reset(defaultValues);
    if (eventId) {
      dispatch(fetchEventById(eventId));
    }
  }, [eventId, dispatch, reset]);

  useEffect(() => {
    if (eventId && eventData) {
      (Object.keys(defaultValues) as Array<keyof FormData>).forEach((key) => {
        const value = eventData[key as keyof typeof eventData];
        if (key in eventData) {
          setValue(
            key,
            typeof value === "number" ? String(value) : value ?? null
          );
        }
      });
    }

    initialValuesRef.current = getValues();
  }, [eventId, eventData, setValue, getValues]);

  const { isDirty, dirtyFields, isValid, errors } = useFormState({ control });

  const handleOnCancel = () => {
    const currentValues = getValues();

    const hasChanges = Object.keys(currentValues).some((key) => {
      return (
        currentValues[key as keyof FormData] !==
        initialValuesRef.current?.[key as keyof FormData]
      );
    });

    if (hasChanges) {
      dispatch(
        addServiceModal({
          type: ServiceModalName.AddEventLeave,
        })
      );
    } else {
      dispatch(
        removeServiceModal(
          eventId ? ServiceModalName.EditEvent : ServiceModalName.AddEvent
        )
      );
    }
  };

  const handleFormSubmit: SubmitHandler<FormData> = (event) => {
    console.log(formatISO(event.dateOfEvent));
    dispatch(removeServiceModal(ServiceModalName.AddEvent));
    const formatedEvent = {
      ...event,
      dateOfEvent: formatISO(event.dateOfEvent),
    };

    if (eventId) {
      dispatch(updateEventById({ id: eventId, payload: formatedEvent }));
      dispatch(removeServiceModal(ServiceModalName.EditEvent));
    } else {
      dispatch(createEvent(formatedEvent));
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
            disabled={isLoading}
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
