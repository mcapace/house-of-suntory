import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The House of Suntory | Crafted in Japan, Defined by Authenticity",
  description: "Experience the art of Japanese whisky through Suntory's iconic distilleries. Discover Yamazaki, Hakushu, Hibiki, and Toki - where tradition meets innovation.",
  keywords: ["suntory", "whisky", "japanese", "yamazaki", "hakushu", "hibiki", "toki"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}