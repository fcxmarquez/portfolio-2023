import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { UIStateProvider } from "@/store/UI/UIState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIStateProvider>
  );
}
