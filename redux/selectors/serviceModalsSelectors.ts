import { ServiceModalName } from "@/enums";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const selectServiceModals = () =>
  useSelector((state: RootState) => state.serviceModalSlice);

export const selectServiceModalPayload = (modalName: ServiceModalName) => {
  return useSelector((state: RootState) => state.serviceModalSlice[modalName]);
};
