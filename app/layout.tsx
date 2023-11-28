'use client'
import "@/styles/globals.css"
import "@covalenthq/goldrush-kit/styles.css";
import { Metadata } from "next"
import { Theme } from '@radix-ui/themes';
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import '@radix-ui/themes/styles.css';
import { GoldRushProvider } from "@covalenthq/goldrush-kit";
import { WalletProvider } from "@/lib/store";
import {  useState } from "react";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// }

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [theme, setTheme] = useState<"dark" | "light">("light")
  const COVALENT_API_KEY = process.env.NEXT_PUBLIC_COVALENT_API_KEY
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <WalletProvider>
            <GoldRushProvider apikey={COVALENT_API_KEY ? COVALENT_API_KEY : ""}  mode={theme} color="sky">
            <Theme>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="relative flex min-h-screen flex-col">
                  <SiteHeader setTheme={setTheme} theme={theme} />
                  <div className="flex-1">{children}</div>
                </div>
              </ThemeProvider>
            </Theme>
            </GoldRushProvider>
          </WalletProvider>


        </body>
      </html>
    </>
  )
}
