import React from "react";

import { skillsInterface } from "@/config/skills";
import Rating from "@/components/rating";

interface SkillsCardProps {
    skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
    return (
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            {skills.map((skill, id) => (
                <div
                    key={id}
                    className="relative overflow-hidden rounded-lg border bg-background p-2"
                >
                    <div className="flex h-[200px] flex-col justify-between rounded-md p-6 sm:h-[200px]">
                        <skill.icon size={50} />
                        <div className="space-y-2">
                            <h3 className="font-bold">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                {skill.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
