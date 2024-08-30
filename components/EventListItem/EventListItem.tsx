import { Event } from "@/types/entities/Event";
import { Box, Tooltip, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import Link from "next/link";
import { ROUTES } from "@/enums/routes/Routes";
import { truncateText } from "@/utils";
import { EditIcon, TrashIcon } from "@/assets/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { deleteEventById } from "@/redux/slices/eventSlice";
import { addServiceModal } from "@/redux/slices/serviceModalSlice/serviceModalSlice";
import { ServiceModalName } from "@/enums";

interface EventListItemProps {
  event: Event;
}

export const EventListItem = React.memo(({ event }: EventListItemProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteEventById(String(event.id)));
  };

  const handleUpdate = () => {
    dispatch(
      addServiceModal({
        type: ServiceModalName.EditEvent,
        payload: {
          id: event.id,
        },
      })
    );
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          width: 1,
          minHeight: "80px",
          p: 1,
          px: 2,
          border: "1px solid #D0D5DD",
          borderRadius: "8px",
          marginBottom: "12px",
          overflow: "hidden",
          "&:hover": {
            borderColor: theme.palette.primary.main,
          },
        }}
      >
        <Tooltip title={"Click to see more"}>
          <Link
            href={ROUTES.LIST + "/" + event.id}
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              height: "80px",
            }}
          >
            <Typography sx={{ fontWeight: "bold", width: "200px" }}>
              {truncateText(event.title, 30)}
            </Typography>
          </Link>
        </Tooltip>
        <Tooltip title={event.dateOfEvent}>
          <Typography sx={{ width: "200px" }}>{event.dateOfEvent}</Typography>
        </Tooltip>
        <Tooltip title={event.place}>
          <Typography sx={{ width: "200px" }}>{event.place}</Typography>
        </Tooltip>
        <Typography sx={{ width: "200px" }}>
          {truncateText(event.description, 30)}
        </Typography>

        <Box sx={{ display: "flex", gap: "12px" }}>
          <EditIcon onClick={handleUpdate} />
          <TrashIcon onClick={handleDelete} />
        </Box>
      </Box>
    </Box>
  );
});
