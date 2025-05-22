import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

import "./globals.css";

import Logo from "@/components/Logo";
import DropdownSelector from "@/components/DropdownSelector";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModeToggle } from "@/components/ToggleMode";
import { Toaster } from "@/components/ui/sonner";

import { deploymentURL } from "@/lib/seo.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeySnipp - Online Keyboard for Broken Keys",
  description:
    "KeySnipp helps you copy letters, numbers, and symbols when your keyboard keys stop working. Access a virtual keyboard instantly.",
  metadataBase: new URL(deploymentURL),
  keywords: [
    "virtual keyboard",
    "keyboard key not working",
    "copy key online",
    "online keyboard tool",
    "KeySnipp",
    "QWERTY keyboard online",
    "copy letter or symbol",
    "keyboard repair help",
    "broken keyboard workaround",
  ],
  openGraph: {
    title: "KeySnipp - Copy Keys from Virtual Keyboard",
    description:
      "Access your missing keyboard keys using KeySnipp’s virtual layouts. Just click and copy.",
    url: deploymentURL,
    siteName: "KeySnipp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeySnipp - Copy Keys from Virtual Keyboard",
    description:
      "KeySnipp gives you instant access to copy characters when your keyboard keys don’t work.",
  },
  icons: {
    icon: "/favicon.ico", // Ensure favicon exists
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "KeySnipp",
              url: deploymentURL,
              description:
                "KeySnipp is a virtual keyboard that helps you copy letters, numbers, and symbols when your physical keyboard is broken.",
              applicationCategory: "Utility",
              operatingSystem: "All",
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <div className="font-[family-name:var(--font-geist-sans)] max-w-screen-xl w-full px-4 mx-auto">
            <div className="flex items-center justify-between p-2 sticky top-0 left-0 z-50 bg-background">
              <Logo />
              <ModeToggle />
            </div>
            <DropdownSelector />

            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
