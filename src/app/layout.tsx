// app/layout.tsx
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fingerprint Modal Clone",
  description: "Fingerprint Modal Clone with theme based on spotter.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased font-sans`}>
        <FpjsProvider
          loadOptions={{
            apiKey: process.env.FINGEPRINTJS_API_KEY || "",
            region: "ap",
          }}
        >
          {children}
        </FpjsProvider>
      </body>
    </html>
  );
}
