export interface contributionsInterface {
    repo: string;
    contibutionDescription: string;
    repoOwner: string;
    image: string;
    link: string;
    year: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
    {
        repo: "💙Secretary - Club Head",
        contibutionDescription:
            "Led a team of 100 members to conduct the most loved  events & competitions on campus.",
        repoOwner: "E-Cell, Shiv Nadar University",
        image: "/extra/ecell.jpg",
        link: "https://youtu.be/jpU9JTjVlSI?si=hVegzF09eBiIXHsy&t=20",
        year: "2021-24"
    },
    {
        repo: "📄Indian Govt. Patent",
        contibutionDescription:
            "Single handedly the most useful thing I got out of a college course. Thanks to Prof. Babu!",
        repoOwner: "Shiv Nadar University",
        image: "/extra/ipr.jpg",
        link: "https://search.ipindia.gov.in/DesignQRStatus/PDF_Viewer.aspx?AppNo=NDAzODk5LTAwMQ==&CNo=MTYxMzQ5",
        year: "Apr, 2024"
    },
    {
        repo: "🎤Undersecretary General",
        contibutionDescription:
            "Organised the largest school level Model UN conference in Bangalore. Led the tech, design and operations teams.",
        repoOwner: "Kumarans Model UN - 2023",
        image: "/extra/kmun.webp",
        link: "https://www.kmun.in/",
        year: "2022-23"
    },
    {
        repo: "🏀Co-chairperson",
        contibutionDescription:
            "Managed technical and logistical aspects of the fest. 10k+ footfall.",
        repoOwner: "Surge - Annual Sports Fest",
        image: "/extra/surge.jpg",
        link: "https://surgesnu.in/",
        year: "2022-23"

    },
    {
        repo: "👨🏻‍💻Coordinator",
        contibutionDescription:
            "Led initiatives to build a coding and problem solving culture in campus.",
        repoOwner: "Google Developers Student Club - SNU",
        image: "/extra/gdsc.jpg",
        link: "https://gdsc.community.dev/shiv-nadar-university-greater-noida-india/",
        year: "2022-23"

    },
    {
        repo: "🏆First Runner Up",
        contibutionDescription:
            "(2/1000+ teams) Built a Web3 solution to fundraising scams in India.",
        repoOwner: "NIT Patna Hackathon 2022",
        image: "/extra/nit.jpg",
        link: "https://github.com/PrabhavPandey/ateru-webapp",
        year: "Feb, 2022"

    },
    {
        repo: "Guitar",
        contibutionDescription:
            "I love playing the guitar! (when no one is around).",
        repoOwner: "Home - Bangalore",
        image: "/extra/guitar.png",
        link: "https://www.youtube.com/watch?v=xvFZjo5PgG0&pp=ygUJcmljayByb2xs",
        year: "2020-Present"

    },
    {
        repo: "🎛EDM Producer",
        contibutionDescription:
            "Rediscovered this hobby during Covid. Two record label deals, 7k+ streams on Spotify.",
        repoOwner: "Home - Bangalore",
        image: "/extra/edm.jpg",
        link: "https://www.instagram.com/vritra_music?igsh=MnlpdHU1N3d6a2px",
        year: "2020"

    },
    {
        repo: "🧒🏻Student Council",
        contibutionDescription:
            "I'm the one with the red flag. Thankfully, that was the only time.",
        repoOwner: "Kumarans (CBSE)",
        image: "/extra/school.jpg",
        link: "https://cbse-mls.kumarans.org/",
        year: "2015-2019"

    },
];

export const featuredContributions: contributionsInterface[] =
    contributionsUnsorted.slice(0, 3);
