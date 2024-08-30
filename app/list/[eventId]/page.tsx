"use client";
import { EditIcon, TrashIcon } from "@/assets/icons";
import { Category, ServiceModalName } from "@/enums";
import { selectEventData } from "@/redux/selectors";
import { deleteEventById, fetchEventById } from "@/redux/slices/eventSlice";
import { addServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { AppDispatch } from "@/redux/store";
import { getImageByCategory } from "@/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

interface EventProps {
  params: {
    eventId: string;
  };
}

export default function Event({ params: { eventId } }: EventProps) {
  const eventData = selectEventData();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchEventById(eventId));
  }, [dispatch, eventId]);

  const handleDelete = () => {
    dispatch(deleteEventById(String(eventId)));
    router.push("/list");
  };

  const handleEdit = () => {
    dispatch(
      addServiceModal({
        type: ServiceModalName.EditEvent,
        payload: {
          id: eventId,
        },
      })
    );
  };

  return (
    <Box
      sx={{
        height: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          alignItems: "stretch",
          backgroundColor: "white",
          maxHeight: 0.7,
          gap: 3,
        }}
      >
        <Box sx={{ height: 1 }}>
          <Image
            src={`/${getImageByCategory(
              eventData?.category || Category.Other
            )}.webp`}
            alt={`${eventData?.category} image`}
            width={400}
            height={400}
            priority
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            p: 2,
            minWidth: "300px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "12px",
              mb: 2,
            }}
          >
            <EditIcon
              onClick={handleEdit}
              sx={{ height: "36px", width: "36px" }}
            />
            <TrashIcon
              onClick={handleDelete}
              sx={{ height: "36px", width: "36px" }}
            />
          </Box>
          <Typography
            sx={{
              fontWeight: 500,
              textAlign: "center",
              mb: 1,
              textDecoration: "underline",
            }}
          >
            {eventData?.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>{eventData?.place}</Typography>
            <Typography sx={{ fontWeight: 500 }}>
              {eventData?.dateOfEvent}
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 500, mb: 1, flex: 1 }}>
            {eventData?.category}
          </Typography>
          <Typography sx={{ maxWidth: "300px" }}>
            {eventData?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
