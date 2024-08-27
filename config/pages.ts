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
    skills: {
        title: "Skills",
        description: "Here's what YouTube has taught me in the last 4 years.",
        // featuredDescription: "Skill Showcase",
    },
    contributions: {
        title: "Some more",
        description: "Positions of leadership & extra curriculars (sorted by date).",
        // featuredDescription: "Contributions Showcase",
    },
    contact: {
        title: "Get in touch.",
        description: "DM me on LinkedIn or shoot me an email (pp606@snu.edu.in). I reply fast.",
    },
};
