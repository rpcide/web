import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '@fontsource/montserrat/800.css'

const theme = extendTheme({
  colors: {
    primary: "#3730a3",
    primaryAlt: "#6366f1",
    primaryDark: "#312e81",
    background: "#fafafa",
    backgroundAlt: "#e2e8f0",
    border: "#d1d5db",
    "border-dark": "#1f2937",
    dark: "#111827",
    text: "#383f4c",
  },
  fonts: {
    heading: `'Montserrat', 'Open Sans', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
