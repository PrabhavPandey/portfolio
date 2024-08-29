import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import ChipContainer from "@/components/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
    project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="relative p-4 sm:p-6 bg-white border border-gray-200 rounded-lg dark:bg-transparent dark:border-gray-700 w-full sm:w-auto max-w-sm mx-auto">
            <div className="relative w-full h-[200px] sm:h-[250px]">
                <Image
                    className="rounded-lg border border-gray-200 dark:border-gray-700 object-cover"
                    src={project.companyLogoImg}
                    alt={`${project.companyName} logo`}
                    fill
                />
            </div>
            <div className="pt-4 sm:pt-5 space-y-3">
                <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.companyName}
                </h5>
                <p className="line-clamp-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                    {project.shortDescription}
                </p>
                <div className="flex gap-2 flex-wrap">
                    <ChipContainer textArr={project.category} />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Link href={`/experience/${project.id}`} className="flex-grow">
                        <Button variant={"default"} className="w-full">
                            Read more
                            <Icons.chevronRight className="w-4 ml-1" />
                        </Button>
                    </Link>
                    <div className="ml-4 p-3 rounded-full bg-white border dark:bg-gray-950 dark:border-gray-700 border-gray-200">
                        {project.type === "Personal Project" ? (
                            <Icons.userFill className="h-4 w-4" />
                        ) : project.type === "Webflow" ? (
                            <Icons.webflow className="h-4 w-4" />
                        ) : (
                            <Icons.work className="h-4 w-4" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}