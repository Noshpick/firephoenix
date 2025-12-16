import type { Metadata } from "next";
import "./globals.css";

// Если используете Google Fonts:
import { Inter, Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import { I18nProvider } from "@/i18n/I18nProvider";
import Loader from "@/components/Loader/Loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "FirePhoenix",
  description: "Description",
  icons: {
    icon: "/fenix.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="preload" as="image" href="/bg.webp" imageSrcSet="/bg-640.webp 640w, /bg-1280.webp 1280w, /bg-1920.webp 1920w" imageSizes="100vw" fetchPriority="high" />
      </head>
      <body className="bg-[url('/bg.webp')]">
        <Loader />
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}