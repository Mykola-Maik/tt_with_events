import { Backdrop, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface IGlobalLoader {
  isOpen: boolean;
}

export const GlobalLoader = ({ isOpen }: IGlobalLoader) => {
  const theme = useTheme();
  return (
    <Backdrop
      sx={{ color: theme.palette.common.white, zIndex: 9999 }}
      open={isOpen}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
