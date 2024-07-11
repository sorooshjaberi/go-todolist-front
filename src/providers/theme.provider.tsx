import { FC, PropsWithChildren, useMemo } from "react";
import {
  CssBaseline,
  ThemeProvider as MuiTheme,
  createTheme,
} from "@mui/material";
import { blue } from "@mui/material/colors";
const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useMemo(() => {
    const createdTheme = createTheme({
      typography: {
        fontFamily: "Poppins",
      },
      shape: {
        borderRadius: 4,
      },
      palette: {
        primary: blue
      },
      components: {
        MuiButton: {
          defaultProps: {
            variant: "contained",
          },
        },
      },
    });
    return createdTheme;
  }, []);

  return (
    <MuiTheme theme={theme}>
      {children}
      <CssBaseline />
    </MuiTheme>
  );
};

export default ThemeProvider;
