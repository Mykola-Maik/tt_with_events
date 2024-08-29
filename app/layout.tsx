import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schedule Events",
  description: "Shcedule your events with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Providers>
          <Header />
          <main
            style={{
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              padding: "0 15px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "url('/home-bg2.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(5px)",
                zIndex: -1,
              }}
            />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
