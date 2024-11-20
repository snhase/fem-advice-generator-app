import type { Metadata } from "next";
import { Manrope, Flow_Block } from "next/font/google";
import "./globals.css";

const primaryFont = Manrope({
  variable: "--font-primary",
  weight: ["200", "800"],
});

const loadingFont = Flow_Block({
  variable: "--font-loading",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Advice generator app | Frontend Mentor Challenge ",
  description: "Advice generator app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${primaryFont.variable} ${loadingFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
