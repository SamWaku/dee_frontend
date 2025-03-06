import { ReactNode } from "react";
import "./globals.css";
import NavigationLayout from "@/components/NavigationLayout";
import Head from "next/head";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>My Website Name</title>
        <meta name="description" content="Welcome to My Website" />
        <meta property="og:title" content="Deelicious_does_flowers" />
        <meta property="og:description" content="Your once stop flower shop" />
        <meta property="og:image" content="../public/Logo.png" />
        <meta
          property="og:url"
          content="https://deeliciousdoesflowers.techohns.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-[#f6efe2]">
        <NavigationLayout>{children}</NavigationLayout>
      </body>
    </html>
  );
}
