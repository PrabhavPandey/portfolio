import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Analytics } from "@/components/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script'

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
});

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
    ],
    authors: [
        {
            name: "prabhav",
            url: "https://prabhav.vercel.app/",
        },
    ],
    creator: "prabhav",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@prabhavpandey",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut:
            "/icon.png",
        apple: "/icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
};


export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children }: RootLayoutProps) {

    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontHeading.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                    <Analytics />
                    <SpeedInsights/>
                    <Toaster />
                    <ModalProvider />
                </ThemeProvider>
            </body>
            <Script data-collect-dnt="true" src="https://scripts.simpleanalyticscdn.com/latest.js"  />
        </html>
    );
}
