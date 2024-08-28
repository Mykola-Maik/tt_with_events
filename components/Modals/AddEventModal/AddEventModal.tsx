import { ServiceModalName } from "@/enums";
import BaseModal from "../BaseModal/BaseModal";
import { useDispatch } from "react-redux";
import { removeServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { AddEventForm } from "./components";

interface AddEventModalProps {
  index: number;
}

const AddEventModal = ({ index }: AddEventModalProps) => {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(removeServiceModal(ServiceModalName.AddEvent));
  };

  return (
    <BaseModal
      title="Add event"
      onClose={handleOnClose}
      index={1000}
      width="752px"
    >
      <AddEventForm />
    </BaseModal>
  );
};

export default AddEventModal;
