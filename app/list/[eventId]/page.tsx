"use client";
import { EditIcon, TrashIcon } from "@/assets/icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface EventProps {
  params: {
    eventId: string;
  };
}

export default function Event({ params: { eventId } }: EventProps) {
  // get event data from the server suing eventId, async/await
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
            src={`/other.webp`} // Replace it depends on the category
            alt="logo" // also this
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
            <EditIcon sx={{ height: "36px", width: "36px" }} />
            <TrashIcon sx={{ height: "36px", width: "36px" }} />
          </Box>
          <Typography
            sx={{
              fontWeight: 500,
              textAlign: "center",
              mb: 1,
              textDecoration: "underline",
            }}
          >
            This is title
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>This is place</Typography>
            <Typography sx={{ fontWeight: 500 }}>This is date</Typography>
          </Box>
          <Typography sx={{ fontWeight: 500, mb: 1, flex: 1 }}>
            This is category
          </Typography>
          <Typography sx={{ maxWidth: "300px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            repudiandae, neque minus aliquid, error, impedit soluta vero sed
            inventore provident cum voluptate? Neque, molestias! Corporis
            officia libero explicabo in ipsum.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
