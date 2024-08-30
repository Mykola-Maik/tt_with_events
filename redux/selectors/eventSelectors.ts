import { useSelector } from "react-redux";
import { RootState } from "../store";

export const selectEventData = () =>
  useSelector((state: RootState) => state.eventSlice.currentEvent);

export const selectEventDataLoading = () =>
  useSelector((state: RootState) => state.eventSlice.isLoading);
