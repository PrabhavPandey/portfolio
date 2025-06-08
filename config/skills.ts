import { Icons } from "@/components/icons";

export interface skillsInterface {
    name: string;
    description: string;
    icon: any;
}

// {Appsmith, Zapier, }

export const skillsUnsorted: skillsInterface[] = [
    {
        name: "webflow",
        description:
            "with 4 yrs and 20+ sites of experience, i'm your go-to webflow guy.",
        icon: Icons.webflow,
    },
    {
        name: "python",
        description:
            "my first ever programming language. use it daily to this day.",
        icon: Icons.python,
    },
    {
        name: "mysql",
        description: "the most useful thing i learnt in high school, hands down.",
        icon: Icons.mysql,
    },
    {
        name: "supabase",
        description: "thank god for supabase. complex schemas built in minutes.",
        icon: Icons.supabase,
    },
    {
        name: "react",
        description:
            "my introduction to web dev. i've tried 6 react frameworks, all the same to me.",
        icon: Icons.react,
    },
    {
        name: "retool",
        description: "the fastest way to build an idea out. highly reccommed.",
        icon: Icons.retool,
    },
    {
        name: "zapier",
        description:
            "built way too many automations for job hunting, internships & projects.",
        icon: Icons.zapier,
    },
    {
        name: "git",
        description: "i'm a developer. i better know this (i don't).",
        icon: Icons.git,
    },
    {
        name: "vercel",
        description: "i've used other hosting tools, but this one's my favorite.",
        icon: Icons.vercel,
    },
    {
        name: "appsmith",
        description: "similar to retool, but better. go-to internal tool builder.",
        icon: Icons.appsmith,
    },
];

export const featuredSkills = skillsUnsorted.slice(0, 6);
