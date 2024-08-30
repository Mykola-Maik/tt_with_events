import { Box, Typography } from "@mui/material";
import { ServiceModalName } from "@/enums";
import { NotificationErrorIcon } from "@/assets/icons";
import { useTheme } from "@mui/material/styles";
import BaseModal from "../BaseModal/BaseModal";
import SubmitButtonModal from "@/components/SubmitButtonModal/SubmitButtonModal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";

interface AddPatientLeaveModalProps {
  index: number;
}

const AddEventLeaveModal = ({ index }: AddPatientLeaveModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  const handleBackButton = () => {
    dispatch(removeServiceModal(ServiceModalName.AddEventLeave));
  };

  const handleLeaveButton = () => {
    dispatch(removeServiceModal(ServiceModalName.AddEventLeave));
    dispatch(removeServiceModal(ServiceModalName.AddEvent));
    dispatch(removeServiceModal(ServiceModalName.EditEvent));
  };

  return (
    <BaseModal width="556px" onClose={handleBackButton} index={1000}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <NotificationErrorIcon sx={{ mb: 4 }} />
        <Typography sx={{ fontSize: "24px", fontWeight: "700", mb: 2.5 }}>
          Are you sure you want to leave this page
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: "400", mb: 5 }}>
          Your entered info will not be saved
        </Typography>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SubmitButtonModal
            onClick={handleBackButton}
            sx={{
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.common.white,
              border: `1px solid ${theme.palette.primary.main}`,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                boxShadow: "none",
              },
            }}
          >
            Back
          </SubmitButtonModal>
          <SubmitButtonModal
            onClick={handleLeaveButton}
            sx={{
              color: theme.palette.common.white,
              backgroundColor: theme.palette.error.main,
              border: `1px solid ${theme.palette.error.main}`,
              "&:hover": {
                backgroundColor: theme.palette.common.white,
                border: `1px solid ${theme.palette.error.main}`,
                color: theme.palette.error.main,
                boxShadow: "none",
              },
            }}
          >
            Leave
          </SubmitButtonModal>
        </Box>
      </Box>
    </BaseModal>
  );
};

export default AddEventLeaveModal;
