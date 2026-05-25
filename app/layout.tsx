import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Baddie vs Bhabhi Janta Party | The Ultimate Political Showdown 🔥",
  description:
    "Two parties. One universe. Infinite memes. Choose your side in India's most unhinged fictional political battle. Free chai, faster WiFi, and vibes guaranteed.",
  keywords: [
    "baddie janta party",
    "bhabhi janta party",
    "parody",
    "meme",
    "political satire",
    "gen-z",
    "fictional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
