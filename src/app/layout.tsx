import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.seoTitle,
  description: profile.seoDescription,
  openGraph: {
    title: profile.seoTitle,
    description: profile.seoDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seoTitle,
    description: profile.seoDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-ink" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
