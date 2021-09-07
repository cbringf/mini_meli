import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Header from "../pages/components/header";

export type TemplateProps = {
  children: JSX.Element;
  title?: string;
  description?: string;
};

export default function Template({
  children,
  title,
  description,
}: TemplateProps) {
  const router = useRouter();

  const handleSearch = (query: string) => router.push(`/items?search=${query}`);

  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <Head>
        <title>{title || "MiniMeli.com.uy"}</title>
        <meta name="description" content={description || "Mini Meli"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header initialQuery="" onQuerySubmit={handleSearch} />
        <div
          style={{
            width: "80%",
            marginLeft: "10%",
            backgroundColor: "#ffffff",
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
