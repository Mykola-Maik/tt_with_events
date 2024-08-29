import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material";

interface TrashIconProps {
  sx?: SxProps<Theme>;
  disabled?: boolean;
  onClick?: () => void;
}

const TrashIcon = ({ sx, disabled, onClick = () => {} }: TrashIconProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "4px",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        borderRadius: 2,
        border: "1px solid",
        color: disabled ? "action.disabled" : "action.active",
        borderColor: disabled ? "action.disabled" : "action.active",
        cursor: disabled ? "default" : "pointer",
        "&:hover": {
          borderColor: disabled ? "action.disabled" : "border.hover",
          backgroundColor: disabled
            ? "common.white"
            : "rgba(56, 65, 155, 0.10)",
          color: disabled ? "action.disabled" : "border.hover",
        },
        ...sx,
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default TrashIcon;
