import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Template.module.css";
import { useRouter } from "next/router";
import Header from "../pages/components/header";

export type TemplateProps = {
  children: JSX.Element;
  title?: string;
  description?: string;
  query?: string;
};

export default function Template({
  children,
  query,
  title,
  description,
}: TemplateProps) {
  const router = useRouter();

  const handleSearch = (query: string) => router.push(`/items?search=${query}`);

  return (
    <div className={styles.content}>
      <Head>
        <title>{title || "MiniMeli.com.uy"}</title>
        <meta name="description" content={description || "Mini Meli"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header initialQuery={query} onQuerySubmit={handleSearch} />
        <div
          style={{
            width: "80%",
            marginLeft: "10%",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ marginTop: 40 }}>{children}</div>
        </div>
      </main>
    </div>
  );
}
