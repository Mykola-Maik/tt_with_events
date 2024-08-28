import { FormDatePicker, FormDropdown, FormInputText } from "@/components";
import { categories } from "@/constants";
import { AddEvent } from "@/types/entities/Event";
import { Box, Stack, type SxProps } from "@mui/material";
import type { Control } from "react-hook-form";

interface AddEventFormViewProps {
  control: Control<AddEvent>;
  sx?: SxProps;
}

export const AddEventFormView = ({ control, sx }: AddEventFormViewProps) => {
  return (
    <Stack
      spacing={3}
      sx={{
        maxHeight: "516px",
        overflowY: "auto",
        mb: 4,
        pr: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
        <FormInputText
          name="title"
          control={control}
          label="Event title"
          placeholder="Enter title"
          required={true}
          sx={{ width: "320px" }}
        />
        <FormDatePicker
          name={"dateOfEvent"}
          control={control}
          label="Date of event"
          disablePast={true}
          required={true}
          sx={{ width: "100%" }}
        />
      </Box>
      <FormInputText
        name="place"
        control={control}
        label="Place"
        placeholder="Enter the place"
        required={true}
        multiline
        sx={{ width: "100%" }}
      />
      <FormInputText
        name="description"
        control={control}
        label="Description"
        placeholder="Enter description"
        required={true}
        multiline
        minRows={5}
        maxRows={5}
        sx={{ width: "100%" }}
      />
      <FormDropdown
        name="category"
        control={control}
        label="Category"
        placeholder="Select category"
        required={true}
        options={categories}
      />
    </Stack>
  );
};
