import { ServiceModalName } from "@/enums";
import BaseModal from "../BaseModal/BaseModal";
import { useDispatch } from "react-redux";
import { removeServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { AddEventForm } from "./components";
import { selectServiceModalPayload } from "@/redux/selectors";
import { useEffect } from "react";
import { fetchEventById } from "@/redux/slices/eventSlice";
import { AppDispatch } from "@/redux/store";

interface AddEventModalProps {
  index: number;
}

const AddEventModal = ({ index }: AddEventModalProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const payload = selectServiceModalPayload(ServiceModalName.EditEvent);
  const { id } = payload || {};

  useEffect(() => {
    if (id) {
      dispatch(fetchEventById(id));
    }
  }, [id, dispatch]);

  const handleOnClose = () => {
    dispatch(
      removeServiceModal(
        id ? ServiceModalName.EditEvent : ServiceModalName.AddEvent
      )
    );
  };

  return (
    <BaseModal
      title={id ? "Edit Event" : "Add Event"}
      onClose={handleOnClose}
      index={1000}
      width="752px"
    >
      <AddEventForm eventId={id} />
    </BaseModal>
  );
};

export default AddEventModal;
