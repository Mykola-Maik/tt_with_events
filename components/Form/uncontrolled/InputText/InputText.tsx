import React, { forwardRef, useState } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { WithSx } from "@/types";
import FormHelperText from "@mui/material/FormHelperText";
import { AlertCircleIcon } from "@/assets/icons";

interface InputTextProps extends WithSx {
  name: string;
  label: string;
  error?: string;
  inputRef: React.Ref<HTMLInputElement>;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  defaultValue?: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      name,
      label,
      error,
      onBlur,
      onChange,
      placeholder,
      required,
      value,
      sx = {},
      inputRef,
      multiline = false,
      minRows = 1,
      maxRows = 1,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const [focused, setFocused] = useState(false);

    const handleFocus = () => setFocused(true);
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) onBlur(event);
    };

    return (
      <Box>
        <Box sx={{ display: "flex", marginBottom: "4px" }}>
          <Typography variant="subtitle2">{label}</Typography>
          {required && (
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.error.main,
              }}
            >
              *
            </Typography>
          )}
        </Box>
        <TextField
          inputRef={inputRef}
          name={name}
          error={!!error}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder={placeholder}
          required={required}
          fullWidth
          inputProps={{
            endAdornment:
              error && !focused ? (
                <InputAdornment
                  position="end"
                  sx={{
                    right: "12px",
                    top: minRows > 1 ? "20px" : "auto",
                    position: "absolute",
                  }}
                >
                  <AlertCircleIcon sx={{ width: "16px", height: "16px" }} />
                </InputAdornment>
              ) : null,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              padding: "0px",
              "& fieldset": {
                borderColor: error
                  ? theme.palette.error.main
                  : null,
                borderWidth: "1px",
                borderRadius: "8px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
              },
              "& .MuiInputBase-input": {
                padding: "11px 12px",
                fontSize: "16px",
                lineHeight: "normal",
                color: theme.palette.common.black,
                "&::placeholder": {
                  color: theme.palette.text.secondary,
                  opacity: 1,
                },
              },
              "&:hover fieldset": {
                borderColor: error
                  ? theme.palette.error.main
                  : theme.palette.primary.main,
                boxShadow: "0px 4px 10px 0px rgba(3, 9, 80, .15)",
              },
              "&.Mui-focused fieldset": {
                border: `1px solid ${theme.palette.primary.main}`,
                boxShadow: "none",
              },
              "&.Mui-focused .MuiInputBase-input::placeholder": {
                opacity: 0,
              },
            },
            margin: 0,
            ...sx,
          }}
          multiline={multiline}
          minRows={minRows}
          maxRows={maxRows}
          {...rest}
        />
        {error && (
          <FormHelperText>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.error.main,
                marginTop: "4px",
                fontWeight: theme.typography.fontWeightRegular,
                width: minRows > 1 ? "100%" : "320px",
              }}
            >
              {error}
            </Typography>
          </FormHelperText>
        )}
      </Box>
    );
  }
);
