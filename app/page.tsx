"use client";
import { ROUTES } from "@/enums/routes/Routes";
import muiTheme from "@/styles/muiTheme";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <Typography
        variant="h1"
        sx={{ color: muiTheme.palette.primary.main, textAlign: "center" }}
      >
        Hello, let's explore the application!
      </Typography>
      <Link href={ROUTES.LIST}>
        <Button variant="outlined" sx={{ textTransform: "none" }}>
          See my list of events
        </Button>
      </Link>
    </Box>
  );
}
