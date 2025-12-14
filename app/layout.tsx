import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/utils/theme-provider";
import ThemeSwitcher from "@/components/theme-switcher";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://vinaykulka.vercel.app"),
  title: {
    default: "Vinay Kulkarni || Portfolio",
    template: "Vinay Kulkarni || %s",
  },
  description: "Portfolio.",
  keywords: "Next.js, React, Tailwind CSS, Server Components, Portfolio",
  creator: "Vinay Kulkarni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
