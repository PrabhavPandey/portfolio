import { ValidPages } from "./constants";

type PagesConfig = {
    [key in ValidPages]: {
        title: string;
        description: string;
        // featuredDescription: string;
    };
};

export const pagesConfig: PagesConfig = {
    experience: {
        title: "Experience",
        description: "Internships, Projects & Freelance work.",
        // featuredDescription: "Work Timeline",
    },
    education: {
        title: "Education",
        description: "My academic journey.",
        // featuredDescription: "Work Timeline",
    },
    skills: {
        title: "Skills",
        description: "Here's what YouTube has taught me in the last 4 years.",
        // featuredDescription: "Skill Showcase",
    },
    contributions: {
        title: "Who am I?",
        description: "Positions of leadership & extra curriculars that define me (sorted by date).",
        // featuredDescription: "Contributions Showcase",
    },
    contact: {
        title: "Get in touch.",
        description: "Book a slot on Calendly or DM me on LinkedIn. I reply fast.",
    },
};
