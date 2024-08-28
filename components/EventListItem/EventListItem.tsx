import { Event } from "@/types/entities/Event";
import { Box, Tooltip, Typography } from "@mui/material";
import theme from "@/styles/muiTheme";
import Link from "next/link";
import { ROUTES } from "@/enums/routes/Routes";
import { truncateText } from "@/utils";
import { EditIcon, TrashIcon } from "@/assets/icons";

export const EventListItem = ({ event }: { event: Event }) => {
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
          <EditIcon />
          <TrashIcon />
        </Box>
      </Box>
    </Box>
  );
};
