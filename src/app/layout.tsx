import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const suisseIntl = localFont({
  src: [
    {
      path: "./fonts/SuisseIntl-Regular-WebXL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SuisseIntl-SemiBold-WebXL.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Emily Buchberger",
  description: "Emily is a brand designer based in Chicago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${suisseIntl.className} antialiased w-screen h-dvh`}>
        {children}
      </body>
    </html>
  );
}
