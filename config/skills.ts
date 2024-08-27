import { Icons } from "@/components/icons";

export interface skillsInterface {
    name: string;
    description: string;
    icon: any;
}

// {Appsmith, Zapier, }

export const skillsUnsorted: skillsInterface[] = [
    {
        name: "Webflow",
        description:
            "With 4 yrs and 20+ sites of experience, I'm your go-to Webflow guy.",
        icon: Icons.webflow,
    },
    {
        name: "Python",
        description:
            "My first ever programming language. Use it daily to this day.",
        icon: Icons.python,
    },
    {
        name: "MySQL",
        description: "The most useful thing I learnt in high school, hands down.",
        icon: Icons.mysql,
    },
    {
        name: "Supabase",
        description: "Thank god for Supabase. Complex schemas built in minutes.",
        icon: Icons.supabase,
    },
    {
        name: "React",
        description:
            "My introduction to web dev. I've tried 6 React frameworks, all the same to me.",
        icon: Icons.react,
    },
    {
        name: "Retool",
        description: "The fastest way to build an idea out. Highly reccommed.",
        icon: Icons.retool,
    },
    {
        name: "Zapier",
        description:
            "Built way too many automations for job hunting, internships & projects.",
        icon: Icons.zapier,
    },
    {
        name: "Git",
        description: "I'm a developer. I better know this (I don't).",
        icon: Icons.git,
    },
    {
        name: "Vercel",
        description: "I've used other hosting tools, but this one's my favorite.",
        icon: Icons.vercel,
    },
    {
        name: "Appsmith",
        description: "Similar to Retool, but better. Go-to internal tool builder.",
        icon: Icons.appsmith,
    },
];

export const featuredSkills = skillsUnsorted.slice(0, 6);
