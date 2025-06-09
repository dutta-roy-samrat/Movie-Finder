import type { Metadata } from "next";

import "./globals.css";
import { MovieListProvider } from "@/context/movie-list";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Movie Finder",
    template: "%s | Movie Finder",
  },
  description: "A movie finder app built with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MovieListProvider>
          <Navbar />
          {children}
        </MovieListProvider>
      </body>
    </html>
  );
}
