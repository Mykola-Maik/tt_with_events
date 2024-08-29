import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material";

interface EditIconProps {
  sx?: SxProps<Theme>;
  disabled?: boolean;
  onClick?: () => void;
}

const EditIcon = ({ sx, disabled, onClick = () => {} }: EditIconProps) => {
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
          d="M14.9987 8.33619L11.6654 5.00286M2.08203 17.9195L4.90234 17.6062C5.24691 17.5679 5.4192 17.5487 5.58024 17.4966C5.72311 17.4503 5.85907 17.385 5.98444 17.3023C6.12574 17.2091 6.24832 17.0866 6.49347 16.8414L17.4987 5.83619C18.4192 4.91572 18.4192 3.42333 17.4987 2.50286C16.5782 1.58238 15.0859 1.58238 14.1654 2.50285L3.16014 13.5081C2.91499 13.7532 2.79241 13.8758 2.69923 14.0171C2.61656 14.1425 2.55121 14.2784 2.50496 14.4213C2.45283 14.5824 2.43368 14.7546 2.3954 15.0992L2.08203 17.9195Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default EditIcon;
