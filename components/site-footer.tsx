import * as React from "react";
import Link from "next/link";

import { cn } from "@/config/lib/utils";
import CustomTooltip from "@/components/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { buttonVariants } from "@/components/ui/button";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(className)}>
            <div className="container flex items-center justify-center gap-8 mt-1 pt-12 md:h-24">
                {SocialLinks.map((item, ind) => (
                    <CustomTooltip
                        icon={item.icon}
                        text={item.username}
                        key={ind}
                    >
                        <Link
                            href={item.link}
                            target="_blank"
                            className={cn(
                                buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                }),
                                "h-10 w-10 p-2"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                        </Link>
                    </CustomTooltip>
                ))}
                
            </div>
            <p className="container flex items-center justify-center md:h-16 pb-20 pt-6 text-gray-300">Built with ❤️ using Next.js 14</p>
        </footer>
    );
}
