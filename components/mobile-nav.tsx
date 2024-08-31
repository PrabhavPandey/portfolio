import * as React from "react";
import Link from "next/link";
import { Ubuntu_Mono } from "next/font/google";
import Confetti from 'react-confetti';

import { cn } from "@/config/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
    items: any[];
    children?: React.ReactNode;
}

const ubuntu = Ubuntu_Mono({
    weight: ["700"],
    style: ["normal"],
    subsets: ["latin"],
    display: "swap",
});

export function MobileNav({ items, children }: MobileNavProps) {
    useLockBody();
    const [isConfettiActive, setIsConfettiActive] = React.useState(false);

    const throwConfetti = () => {
        setIsConfettiActive(true);
        setTimeout(() => setIsConfettiActive(false), 5000); // Stop after 5 seconds
    };

    return (
        <div
            className={cn(
                "fixed inset-0 top-8 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden"
            )}
        >
            <div className="relative z-20 grid gap-2 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <Link href="/" className="flex items-center space-x-2">
                    <span className={cn(ubuntu.className, "text-2xl")}>
                        prabhav.
                    </span>
                </Link>
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                                item.disabled && "cursor-not-allowed opacity-60"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2 h-8 w-full px-2 text-sm font-medium transition-colors hover:text-foreground/80" 
                        onClick={throwConfetti}
                    >
                        Bored?
                    </Button>
                </nav>
                {children}
            </div>
            {isConfettiActive && <Confetti />}
        </div>
    );
}