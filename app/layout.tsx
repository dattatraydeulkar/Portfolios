import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dattatray Deulkar | Portfolio",
  description:
    "Portfolio of Dattatray Deulkar, Associate Software Engineer and Fullstack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
