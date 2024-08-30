import React from "react";
import Image from "next/image";
import { EducationInterface } from "@/config/education";
import { Icons } from "@/components/icons";

interface EducationCardProps {
    education: EducationInterface[];
}

export default function EducationCard({ education }: EducationCardProps) {
    return (
        <div className="mx-auto grid justify-center gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[90rem]">
            {education.map((edu, id) => (
                <div key={id} className="relative rounded-lg border bg-background p-3 sm:p-4 hover:bg-accent hover:text-accent-foreground w-[86vw] sm:w-auto">
                    <div className="relative w-full h-[200px] sm:h-[250px] mb-4 sm:mb-5">
                        <Image
                            className="rounded-lg border border-gray-200 dark:border-gray-700 object-cover"
                            src={edu.image}
                            alt={`${edu.institution} image`}
                            fill
                        />
                    </div>
                    <div className="flex flex-col justify-between rounded-md p-2 sm:p-4">
                        <div className="flex flex-row justify-between mb-2 sm:mb-3">
                            <h3 className="text-lg sm:text-xl font-bold flex space-x-2 items-center">
                                <Icons.gitOrgBuilding className="w-5 h-5 mr-2" />
                                <span>{edu.institution}</span>
                            </h3>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <p className="text-base sm:text-lg text-muted-foreground flex items-center">
                              <Icons.degree className="w-4 h-4 mr-2" />
                              {edu.subject}
                          </p>
                          <p className="text-base sm:text-lg text-muted-foreground flex items-center">
                            <Icons.billing className="w-4 h-4 mr-2" />
                            {edu.years}
                          </p>

                          <p className="text-base sm:text-lg font-bold text-muted-foreground flex items-center">
                            <Icons.cgpa className="w-4 h-4 mr-2" />
                            {edu.grade}
                          </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
} 