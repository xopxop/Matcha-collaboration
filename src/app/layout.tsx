import type { Metadata } from "next";
import "@/styles/globals.css";
import { geistMono, geistSans } from "@/fonts/fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Matcha",
  description: "Dating app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description ?? ''} />
        {/* Add other head elements here, like link or meta tags */}
      </Head>
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
