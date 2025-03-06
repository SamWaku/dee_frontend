// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css"; // Make sure to import your global styles
import NavigationLayout from "@/components/NavigationLayout";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f6efe2]">
        <NavigationLayout>{children}</NavigationLayout>
      </body>
    </html>
  );
}
