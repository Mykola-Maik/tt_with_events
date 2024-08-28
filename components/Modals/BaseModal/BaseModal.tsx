import { Box, IconButton, Modal, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { CloseIcon } from "@/assets/icons";

interface BaseModalProps {
  title?: string;
  width: string;
  children?: React.ReactNode;
  onClose: () => void;
  index?: number;
}

const BaseModal = ({
  onClose,
  index = 1000,
  width,
  title,
  children,
}: BaseModalProps) => {
  return (
    <Modal
      open
      sx={{
        backdropFilter: "blur(10px)",
        background: "#2a2b2f4a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: index,
        padding: "0px",
      }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(80, 95, 111, 0.50)",
          },
        },
      }}
    >
      <Paper
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          padding: "32px",
          width: "100%",
          maxWidth: width,
          borderRadius: "12px",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "16px",
            right: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CloseIcon
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              svg: {
                width: "10px",
                height: "10px",
              },
            }}
          />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          {title && (
            <Typography variant="h4" sx={{ pb: 4 }}>
              {title}
            </Typography>
          )}
          {children}
        </Box>
      </Paper>
    </Modal>
  );
};

export default BaseModal;
