import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import NavBar from "@/components/NavBar";
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
  title: "TeaIndex - Ceylon Tea, Decoded in Data",
  description:
    "Sri Lanka's open-access tea industry data platform. Colombo auction prices, tracked and forecast, free for every stakeholder.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceGrotesk.variable} scheme-dark`}
    >
      <body className="bg-canvas font-sans text-ink antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}