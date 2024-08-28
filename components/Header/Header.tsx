"use client";

import { pagesList } from "@/constants/Header/pagesList";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { ROUTES } from "@/enums/routes/Routes";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link href={ROUTES.HOME}>
              <Image
                src={
                  "https://cdn.prod.website-files.com/64d4bc24e2fe2e96e389b105/64d4bd0b0bae9558d0f6011f_Logo_horizontal_black.svg"
                }
                alt="CodeGreeks Logo"
                width={100}
                height={50}
                priority
                style={{ cursor: "pointer", marginRight: "20px" }}
              />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={isMenuOpen}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pagesList.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ textAlign: "center" }}
                >
                  <Link onClick={handleCloseNavMenu} href={page.href}>
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Link href={ROUTES.HOME}>
              <Image
                src={
                  "https://cdn.prod.website-files.com/64d4bc24e2fe2e96e389b105/64d4bd0b0bae9558d0f6011f_Logo_horizontal_black.svg"
                }
                alt="CodeGreeks Logo"
                width={100}
                height={50}
                priority
                style={{ cursor: "pointer", marginRight: "20px" }}
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 5, justifyContent: "flex-end" }}>
            {pagesList.map((page) => (
              <Link key={page.id} onClick={handleCloseNavMenu} href={page.href}>
                <Typography
                  noWrap
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
