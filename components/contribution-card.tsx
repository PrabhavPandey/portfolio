import React from "react";
import Link from "next/link";
import Image from "next/image";

import { contributionsInterface } from "@/config/contributions";
import { Icons } from "./icons";

interface ContributionCardProps {
    contributions: contributionsInterface[];
}

export default function ContributionCard({
    contributions,
}: ContributionCardProps) {
    return (
        <div className="mx-auto grid justify-center gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[90rem]">
            {contributions.map((contribution, id) => (
                <Link href={contribution.link} target="_blank" key={id}>
                    <div className="relative rounded-lg border bg-background p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground w-[86vw] sm:w-auto">
                        <Icons.externalLink
                            size={30}
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 border bg-background rounded-full p-1.5 sm:p-2 cursor-pointer text-muted-foreground z-10"
                        />
                        <div className="relative w-full h-[200px] sm:h-[250px] mb-4 sm:mb-5">
                            <Image
                                className="rounded-lg border border-gray-200 dark:border-gray-700 object-cover"
                                src={contribution.image}
                                alt={`${contribution.repo} image`}
                                fill
                            />
                        </div>
                        <div className="flex flex-col justify-between rounded-md p-2 sm:p-4">
                            <div className="flex flex-row justify-between mb-2 sm:mb-3">
                                <h3 className="text-lg sm:text-xl font-bold flex space-x-2 items-center">
                                    <span>{contribution.repo}</span>
                                </h3>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    {contribution.contibutionDescription}
                                </p>
                                <p className="text-sm sm:text-base font-bold text-muted-foreground flex space-x-2 items-center">
                                    <Icons.gitOrgBuilding size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    <span>{contribution.repoOwner}</span>
                                </p>
                                <p className="text-sm sm:text-base text-muted-foreground flex space-x-2 items-center">
                                    <Icons.time size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    <span>{contribution.year}</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}