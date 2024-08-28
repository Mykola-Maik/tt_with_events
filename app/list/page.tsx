"use client";
import { EventFixture } from "@/tests/fixtures/Event";
import { Box, Typography, List as MuiList, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Event } from "@/types/entities/Event";
import { EventListItem } from "@/components";
import { useDispatch } from "react-redux";
import { addServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { ServiceModalName } from "@/enums";

export default function List() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const addEventHandler = () => {
    dispatch(
      addServiceModal({
        type: ServiceModalName.AddEvent,
      })
    );
  };

  useEffect(() => {
    setEvents([
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
      EventFixture(),
    ]);
    setIsLoading(false);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        py: 3,
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <Button
          variant="outlined"
          onClick={addEventHandler}
          sx={{ textTransform: "none", alignSelf: "flex-start" }}
        >
          + Add an event
        </Button>
        <Typography variant="h5">List of your events!</Typography>
      </Box>
      <MuiList
        sx={{
          overflow: "auto",
          border: "1px solid #D0D5DD",
          borderRadius: "8px",
          p: 3,
          width: 1,
          height: "500px",
        }}
      >
        {events.map((event) => (
          <EventListItem key={event.id} event={event} />
        ))}
      </MuiList>
    </Box>
  );
}
