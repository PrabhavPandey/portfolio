"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Ubuntu_Mono } from "next/font/google"
import Confetti from 'react-confetti'

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

interface MainNavProps {
    items?: any[];
    children?: React.ReactNode;
}

const ubuntu = Ubuntu_Mono({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
    const pathname = usePathname();
    const [isConfettiActive, setIsConfettiActive] = React.useState(false);

    React.useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);

    const throwConfetti = () => {
        setIsConfettiActive(true);
        setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
    };

    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <span className={cn(ubuntu.className, "text-2xl")}>
                    prabhav.
                </span>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/60",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}                                                                                      
                        >
                            {item.title}
                        </Link>
                    ))}
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-20 px-2 text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm" 
                        onClick={throwConfetti}
                    >
                        Bored?
                    </Button>

                </nav>
            ) : null}
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Icons.close /> : <Icons.menu />}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
            {isConfettiActive && <Confetti />}
        </div>
    );
}

