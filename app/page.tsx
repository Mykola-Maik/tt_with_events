"use client";
import { ServiceModalName } from "@/enums";
import { addServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const addEventHandler = () => {
    dispatch(
      addServiceModal({
        type: ServiceModalName.AddEvent,
      })
    );
  };
  return (
    <Box>
      <Typography>Hello, this is home!</Typography>
      <Button variant="contained" onClick={addEventHandler}>
        Add event
      </Button>
    </Box>
  );
}
