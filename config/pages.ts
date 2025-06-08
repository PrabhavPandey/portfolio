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
        title: "experience",
        description: "internships, projects & freelance work.",
        // featuredDescription: "Work Timeline",
    },
    education: {
        title: "education",
        description: "my academic journey.",
        // featuredDescription: "Work Timeline",
    },
    skills: {
        title: "skills",
        description: "here's what youtube has taught me in the last 4 years.",
        // featuredDescription: "Skill Showcase",
    },
    contributions: {
        title: "who am i?",
        description: "positions of leadership & extra curriculars that define me (sorted by date).",
        // featuredDescription: "Contributions Showcase",
    },
    contact: {
        title: "get in touch.",
        description: "book a slot on calendly or dm me on linkedin. i reply fast.",
    },
};
