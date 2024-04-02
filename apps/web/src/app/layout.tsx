import type { Metadata } from "next";
import BaseLayout from "@components/layouts/base-layout";
import { ThemeProvider } from "@/providers/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kream Compare Viewer",
  description: "Kream Compare Viewer",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <BaseLayout>{children}</BaseLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
