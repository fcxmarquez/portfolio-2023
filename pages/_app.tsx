import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { UIStateProvider } from "@/store/UI/UIState";
import { ReactNode, ReactElement } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return <UIStateProvider>{getLayout(<Component {...pageProps} />)}</UIStateProvider>;
}
