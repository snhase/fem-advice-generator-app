import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Advice generator app | Frontend Mentor Challenge ",
  description: "Advice generator application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
