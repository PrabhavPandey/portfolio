import { Icons } from "@/components/icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@prabhavpandey",
        icon: Icons.gitHub,
        link: "https://github.com/PrabhavPandey",
    },
    {
        name: "LinkedIn",
        username: "Prabhav Pandey",
        icon: Icons.linkedin,
        link: "https://www.linkedin.com/in/prabhav-pandey/",
    },
    {
        name: "Gmail",
        username: "pp606@snu.edu.in",
        icon: Icons.gmail,
        link: "mailto:pp606@snu.edu.in",
    },
];
