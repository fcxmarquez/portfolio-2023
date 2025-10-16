import Head from "next/head";
import { CSSProperties, ReactElement } from "react";
import { Layout } from "@/components/Layout/Layout";
import { headerCSS } from "@/components/Nav/nav.styles";

const mainStyles: CSSProperties = {
  minHeight: "100vh",
  minWidth: "100vw",
  position: "absolute",
  overflowX: "hidden",
  paddingTop: headerCSS.heightMobile,
};

export default function Curriculum() {
  return (
    <>
      <Head>
        <title>Francisco Marquez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={mainStyles}>
        <iframe
          src="https://drive.google.com/file/d/1Af60b_keS6KPAYcRPXPq_OvMcQXr62-w/preview"
          allow="autoplay"
          title="Francisco Marquez's Curriculum"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        />
      </main>
    </>
  );
}

// Get the layout Layout with the prop onlyNav set to true

Curriculum.getLayout = (page: ReactElement) => <Layout onlyNav={true}>{page}</Layout>;
