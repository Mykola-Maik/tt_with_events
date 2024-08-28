import "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { Palette } from "@mui/material/styles/createPalette";

declare module "*.scss";
declare module "*.svg";
declare module "*.png";
declare module "*.pdf";
declare const ENVIRONMENT_VARIABLES: { [key: string]: any };
declare module "@mui/material/styles" {
  interface TypographyVariants {}
  interface TypographyVariantsOptions {}
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    head: true;
    baseTableHeader: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {}
  interface Palette {}
}
