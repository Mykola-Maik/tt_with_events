import Box from "@mui/material/Box";
import type { WithSx } from "@/types";

type AlertCircleIconProps = WithSx<{}>;

const AlertCircleIcon = (props: AlertCircleIconProps) => {
  return (
    <Box {...props}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00016 5.33337V8.00004M8.00016 10.6667H8.00683M14.6668 8.00004C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8.00004C1.3335 4.31814 4.31826 1.33337 8.00016 1.33337C11.6821 1.33337 14.6668 4.31814 14.6668 8.00004Z"
          stroke="#F72F53"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default AlertCircleIcon;
