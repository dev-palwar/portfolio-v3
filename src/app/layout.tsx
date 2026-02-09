import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../providers/theme-provider";
import { Header } from "@/components/reusables/Header";
import Footer from "@/components/reusables/Footer";
import NextTopLoader from "nextjs-toploader";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dev's Portfolio",
  description: "A developer's portfolio showcasing projects and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/me.jpg" type="image/jpg" />
      <body className={`antialiased ${geist.className}`}>
        <NextTopLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container-main">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
