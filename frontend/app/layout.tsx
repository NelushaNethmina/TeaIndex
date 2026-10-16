import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TeaIndex — Ceylon Tea, Decoded in Data",
  description:
    "Sri Lanka's open-access tea industry data platform — Colombo auction prices, tracked and forecast, free for every stakeholder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${spaceGrotesk.variable} bg-[#0F1611] text-[#EDE8DE] antialiased`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {children}
      </body>
    </html>
  );
}