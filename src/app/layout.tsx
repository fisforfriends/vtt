import type { Metadata } from "next";
import "./globals.css";

import Alchemy from "../../lib/alchemy";
import Version from "../../lib/version";
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: Version.toString(Alchemy.VERSION),
  description: "A Virtual Tabletop for the Modern Era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>      
    </html>
  );
}
