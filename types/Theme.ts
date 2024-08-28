export interface ITheme {
  color: {
    mainWhite: string;
    mainBlack: string;
    mainSecondaryText: string;
    mainBlue: string;
    mainError: string;
    buttonActive: string;
    buttonDisabled: string;
    mainStroke: string;
    mainSecond: string;
  };
  fontFamily: {
    primary: string;
    secondary: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    md: string;
    rg: string;
    lg: string;
    ml: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    thin: string;
    extralight: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
    black: string;
  };
  spacings: {
    xs: string;
    s: string;
    md: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
}
