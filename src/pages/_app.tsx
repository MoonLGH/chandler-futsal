import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false} disableGlobalStyle={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
