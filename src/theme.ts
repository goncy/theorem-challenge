import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        backgroundColor: "white",
        minHeight: "100vh",
        height: "100%",
      },
    },
  },
  colors: {
    primary: {
      ...theme.colors.purple,
      500: "#AB61E5",
    },
  },
});
