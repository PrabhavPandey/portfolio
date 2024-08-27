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
        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[90rem]">
            {contributions.map((contribution, id) => (
                <Link href={contribution.link} target="_blank" key={id}>
                    <div className="relative rounded-lg border bg-background p-4 hover:bg-accent hover:text-accent-foreground">
                        <Icons.externalLink
                            size={35}
                            className="absolute top-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground z-10"
                        />
                        <div className="relative w-full h-[250px] mb-5">
                            <Image
                                className="rounded-lg border border-gray-200 dark:border-gray-700 object-cover"
                                src={contribution.image}
                                alt={`${contribution.repo} image`}
                                fill
                            />
                        </div>
                        <div className="flex flex-col justify-between rounded-md p-4">
                            <div className="flex flex-row justify-between mb-3">
                                <h3 className="text-xl font-bold flex space-x-2 items-center">
                                    <span>{contribution.repo}</span>
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <p className="text-base text-muted-foreground">
                                    {contribution.contibutionDescription}
                                </p>
                                <p className="text-base text-muted-foreground flex space-x-2 items-center">
                                    <Icons.time size={18} />
                                    <span>{contribution.year}</span>
                                </p>
                                <p className="text-base text-muted-foreground flex space-x-2 items-center">
                                    <Icons.gitOrgBuilding size={18} />
                                    <span>{contribution.repoOwner}</span>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}