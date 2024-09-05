import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
    title: string;
    imgArr: string[];
    description?: string;
}

interface DescriptionDetailsInterface {
    paragraphs: string[];
    bullets: string[];
}

export interface ExperienceInterface {
    id: string;
    type: ValidExpType;
    companyName: string;
    category: ValidCategory[];
    shortDescription: string;
    websiteLink?: string;
    githubLink?: string;
    techStack: ValidSkills[];
    startDate: Date;
    endDate: Date;
    companyLogoImg: any;
    descriptionDetails: DescriptionDetailsInterface;
    pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
    {
        id: "accenture",
        companyName: "SWE Intern @ Accenture",
        type: "Internships",
        category: ["Internship", "Summer - 2024"],
        shortDescription:
            "Summer intern at Accenture Bangalore. Worked as a part of the capital projects GenAI team.",
        websiteLink: "https://www.linkedin.com/posts/prabhav-pandey_accenture-aseintern-accentureintern-activity-7221493820859854848-4oaa",
        githubLink: "",
        techStack: [
            "Python",
            "Langchain",
            "Angular",
            "AWS"
        ],
        startDate: new Date("2024-05-20"),
        endDate: new Date("2024-07-20"),
        companyLogoImg: "/experience/accenture/accenture.gif",
        pagesInfoArr: [
            {
                title: "",
                description: "",
                imgArr: [
                    "/experience/accenture/office.webp",
                    "/experience/accenture/team.webp",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "As a part of my two month summer internship in my 3rd year break, I interned at Accenture - Bangalore as an Associate Software Engineering Intern.",
                "Learnt the ropes of application based RAG and GenAI development while working in a corporate environment."
                ,
            ],
            bullets: [
                "Engineered a custom knowledge GenAI chatbot using Python, LangChain, and Azure. Achieved 50x faster multi-PDF processing.",
                "Enabled intelligent, context-aware processing across large documents with images and unstructured tables.",
                "Implemented the model using AzureOpenAI and NLP techniques, boosting information retrieval efficiency by 40% in comparison to existing models."
            ],
        },
    },
    {
        id: "snuxplore",
        companyName: "Co-founder @ SNUxplore",
        type: "Personal Project",
        category: ["Project", "Web Dev"],
        shortDescription:
            "Comprehensive navigation platform for my college campus. 140k+ visits & 8k+ unique users globally.",
        websiteLink: "https://youtu.be/gAexYOZn2rs?si=j2ehIi9M-fCQ_jLL",
        githubLink: "https://github.com/PrabhavPandey/frontend",
        techStack: ["Sass", "Prisma", "Remix.js"],
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-05-01"), 
        companyLogoImg: "/experience/snuxplore/web.webp",
        pagesInfoArr: [
            {
                title: "",
                description: "Statistics as of Aug 10, 2024",
                imgArr: [
                    "/experience/snuxplore/stats.jpg",
                ],
            },
            {
                title: "",
                description: "Meeting the admin with my Co-founder & roommate, Keshav ",
                imgArr: [
                    "/experience/snuxplore/two.jpg",
                    "/experience/snuxplore/one.jpg",
                    "/experience/snuxplore/four.webp",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Started this as a hobby project in my freshman year to help new joiners, parents and visitors navigate our 300 acre campus.",
                "Over 3 years, scaled it to 140k+ visits and 8k unique users and established it as a legacy project in our university, to allow new batches to learn design, development and product skills.",
                `VISIT  snuxplore.com NOW!`
            ],
            bullets: [
                "Led a team of 14 devs, designers and writers across the product lifecycle.",
                "Recognised by the college administration, and also used by students on a daily basis.",
                "Developed an AI chatbot trained on the student rulebook to address student queries.",
            ],
        },
    },
    {
        id: "invoicex",
        companyName: "invoiceX",
        type: "Personal Project",
        category: ["Project", "Data Science", "AI"],
        shortDescription:
            "A free, fast and simple web-based invoice generator and invoice analysis tool. Never waste time on invoices again.",
        websiteLink: "https://invoicex.streamlit.app/",
        githubLink: "https://github.com/PrabhavPandey/invoiceX",
        techStack: ["Python", "Streamlit", "Gemini API"],
        startDate: new Date("2019-06-11"),
        endDate: new Date("2019-06-11"), 
        companyLogoImg: "/experience/invoicex/one.png",
        pagesInfoArr: [
            {
                title: "",
                description: "",
                imgArr: [
                    "/experience/invoicex/gen.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "A free, fast and simple web-based invoice generator and invoice analysis tool. I built this to help clubs in my college spends less time on invoice management.",
                "Ideal for small businesses and freelancers to stay on top of their payments and invoices.",
            ],
            bullets: [
                "Invoice Generator: Generate invoices in a jiffy. Just fill in the details and download the invoice as a PDF - no sign up, no payment.",
                "Ask Invoice: Just upload the invoice and ask it anything about it. Total tax, amount, due date, you name it. Using Gemini API.",
            ],
        },
    },

    {
        id: "namma",
        companyName: "NammaYatri - Estimator",
        type: "Personal Project",
        category: ["Project", "Data Science", "ML"],
        shortDescription:
            "Fare and cancellation predictor for Namma Yatri autos in Bangalore. ML model trained on Yatri open data.",
        websiteLink: "https://pls-dont-cancel-anna.streamlit.app/",
        githubLink: "https://github.com/PrabhavPandey/pls-dont-cancel-anna",
        techStack: ["Python", "Streamlit", "Pandas", "sklearn", "numpy"],
        startDate: new Date("2019-06-11"),
        endDate: new Date("2019-06-11"), 
        companyLogoImg: "/experience/nammayatri/one.png",
        pagesInfoArr: [
            {
                title: "",
                description: "",
                imgArr: [
                    "/experience/nammayatri/two.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "An exploratory data science project to predict the fare and cancellation of Namma Yatri autos in Bangalore.",
                "Datasource: Namma Yatri Open Data (10k+ items).",
            ],
            bullets: [
                "Fare Estimator: Just enter the source and ride distance, and the model predicts the fare for you based on historical data.",
                "Cancellation Predictor: With the same inputs as above, and the model predicts the probability of the ride being cancelled - the age old problem of Bengaluru!",
            ],
        },
    },
    {
        id: "zorp",
        companyName: "Data Intern @ Zorp",
        type: "Internships",
        category: ["Internship", "Summer - 2023"],
        shortDescription:
            "Data analyst intern at Zorp - A Bangalore based tech startup. Worked as a part of the growth and data verticals.",
        websiteLink: "https://www.linkedin.com/posts/prabhav-pandey_two-months-wrapped-up-at-zorp-as-a-technical-activity-7092161041660313602-H2xS",
        techStack: ["Python", "SQL", "Supabase", "Retool", "Appsmith"],
        startDate: new Date("2023-06-01"),
        endDate: new Date("2023-08-01"),
        companyLogoImg: "/experience/zorp/zorp.png",
        pagesInfoArr: [
            {
                title: "",
                description: "",
                imgArr: [
                    "/experience/zorp/team.webp",
                    "/experience/zorp/pic.webp"
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "As a part of my summer break after my 2nd year, I interned at Zorp as a Data Analyst Intern. I met some amazing people here and shipped close to 5 tools over the two months.",
            ],
            bullets: [
                "Built an ETL pipeline, transforming daily client operations data into actionable insights on employee and supply chain performance, saving close to 15 hours/week through proactive trend analysis.",
                "Increased paid subscriber retention by 30% via an automated ML Driven anomaly detection dashboard",
                "Used Python, Supabase, and data visualization using Pandas, Matplotlib & Seaborn on an 80k+ items large dataset."
            ],
        },
    },
    {
        id: "exponent",
        companyName: "Exponent Energy",
        type: "Webflow",
        category: ["Freelance"],
        shortDescription:
            "Developed their website as a part of a 15 day sprint brand refresh. Exponent is valued at $100mn+ now.",
        websiteLink: "https://www.exponent.energy/",
        techStack: [
            "Webflow"
        ],
        startDate: new Date("2021-07-01"),
        endDate: new Date("2022-07-01"),
        companyLogoImg: "/experience/exponent/hero_exponent.webp",
        pagesInfoArr: [],
        descriptionDetails: {
            paragraphs: [
                "As a part of the company's brand revamp in 2021, I worked in the capacity of a freelance Webflow developer over a span of 15 days. I was responsible for working with the design team, and developing the given Figma designs in a very acceleratd timeline.",
            ],
            bullets: [
                "Worked extensively with Webflow's custom animation and Lottie features.",
                "Developed and optimized a high-performing website catering to all SEO practices.",
                "Achived 90+ scores on Google PageSpeed Insights across all devices.",
            ],
        },
    },
    {
        id: "mld",
        companyName: "My Lifestyle Doc",
        type: "Webflow",
        category: ["Freelance"],
        shortDescription:
            "Developed the official website of MyLifestyleDoc, a leading online wellness platform based in Kentucky (USA)",
        websiteLink:
            "https://www.mylifestyledoc.com/",
        techStack: ["Webflow"],
        startDate: new Date("2021-07-01"),
        endDate: new Date("2022-07-01"),
        companyLogoImg: "/experience/mld/mld_hero.webp",
        pagesInfoArr: [],
        descriptionDetails: {
            paragraphs: [
                `My Lifestyle Doc, established by, Dr. Sarah Schuetz is dedicated to empowering patients to harness the power of lifestyle choices in improving their health and well-being.
                
                I was a part of a two-person team, responsible for the development of all the pages on Webflow
                `,
            ],
            bullets: [],
        },
    },
    {
        id: "smile",
        companyName: "Smile Creations",
        type: "Webflow",
        category: ["Freelance"],
        shortDescription:
            "Developed Smile Creations's official landing page using Webflow. Based in Burbank (USA)",
        githubLink: "https://smilecreations.webflow.io/",
        techStack: ["Webflow"],
        startDate: new Date("2021-07-14"),
        endDate: new Date("2022-07-01"),
        companyLogoImg: "/experience/smile/smile_hero.webp",
        pagesInfoArr: [],
        descriptionDetails: {
            paragraphs: [
                `As a new Dental setup based in Burbank (USA) aiming to solidify their digital presence, this website was ideated, designed and developed keeping in mind the needs of the client.`,
            ],
            bullets: [
                "Used custom code and embeds to create the 'Our Work' page.",
                "95+ Google PageSpeed Insights scores on all devices.",
            ],
        },
    },
    {
        id: "shosty",
        companyName: "Shosty: Dubai Real Estate",
        type: "Webflow",
        category: ["Freelance"],
        shortDescription:
            "Developed the latest official website of Shosty - A leading real estate firm based in Dubai.",
        websiteLink: "https://shosty.webflow.io/",
        techStack: ["Webflow"],
        startDate: new Date("2022-03-01"),
        endDate: new Date("2022-07-01"),
        companyLogoImg: "/experience/shosty/shosty_hero.webp",
        pagesInfoArr: [],
        descriptionDetails: {
            paragraphs: [
                `Shosty is a leading real estate firm based in Dubai. Their services include consultation, property management, leasing and a lot more for all things related to land and properties.`,
            ],
            bullets: [],
        },
    },

    {
        id: "crypto",
        companyName: "Frontend Intern @ Crypto Capable",
        type: "Internships",
        category: ["Internship"],
        shortDescription:
            "Frontend Engineering intern at an early stage Crypto startup based in Bangalore.",
        websiteLink: "", 
        githubLink: "", 
        techStack: ["Webflow", "Next.js", "Firebase", "CSS 3"],
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-05-01"), 
        companyLogoImg: "/experience/cc/logo.jpeg",
        pagesInfoArr: [
        ],
        descriptionDetails: {
            paragraphs: [
                "Crypto Capable was an early stage NEAR funded crypto education startup based in Bangalore. Worked in the capacity of a frontend engineer for around 6 months."

            ],
            bullets: [
                "Was responsible for developing the NEARamp SDK - Built using NEAR API JS, TypeScript, ReactJS and Sass.",
                "Built the main Crypto Capable website and the marketing website for the NEARamp SDK using Webflow.",
                "Made a form using NextJS, TailwindCSS and Firebase for the application to the Voyager program.",
                "Simultaneously reached out to, spoke to talented developers to enhance the ecosystem.",
            ],
        },
    },

    {
        id: "etl",
        companyName: "SWE Intern @ EaseToLearn",
        type: "Internships",
        category: ["Internship"],
        shortDescription:
            "Frontend Engineering intern at an e-learning company based in Delhi.",
        websiteLink: "https://easetolearn.com/", 
        githubLink: "", 
        techStack: ["Next.js", "CSS 3", "Material UI", "Axios"],
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-05-01"), 
        companyLogoImg: "/experience/etl/logo.png",
        pagesInfoArr: [
        ],
        descriptionDetails: {
            paragraphs: [
                "ETL is an e-learning platform based in Delhi NCR. Worked in the capacity of a frontend engineer for around 3 months."
            ],
            bullets: [
                "Led the development of 5 responsive pages using Next JS.",
                "Utilized Material-UI to structure dynamic, functional components fetching data via Axios from the backend",
                "Achieved a 40% improvement in SEO rankings across all devices. Leveraged Google Lighthouse for analysis.",
            ],
        },
    },

    {
        id: "link",
        companyName: "Link Vault (Extension)",
        type: "Personal Project",
        category: ["Project", "Web Dev"],
        shortDescription:
            "A JavaScript based chrome extension to save links on the go. This was my first open source project.",
        websiteLink: "https://github.com/PrabhavPandey/link-vault", 
        githubLink: "https://github.com/PrabhavPandey/link-vault", 
        techStack: ["Javascript", "HTML 5", "CSS 3"],
        startDate: new Date("2022-05-01"),
        endDate: new Date("2022-05-01"),
        companyLogoImg: "/experience/link/icon.png",
        pagesInfoArr: [
            {
                title: "",
                description: "",
                imgArr: [
                    "/experience/link/snip.png",
                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "A browser extension I made to learn JavaScript fundamentals - It helps users save links on the go."
            ],
            bullets: [
                "Most sales represantatives use excel sheets to keep track of their leads and prospects, and they open it maybe once a day to update it. But if they come across a lead while browsing LinkedIn leisurely, they laze out and don't update the excel sheet, potentially lose out on great prospects. This extension helps them save links/profiles on the go. Just one click, and it's done!",
                "Have a lot of folders and bookmarks in your bookmark bar and still come across a link that you have no idea where to put? Forget the internal deliberation to decide where to put it. Save it here and keep the organising for another time.",
            ],
        },
    },

    {
        id: "covicaller",
        companyName: "Founder @ CoviCaller",
        type: "Personal Project",
        category: ["Project", "Web Dev"],
        shortDescription:
            "A crowdsourced contact directory to tackle Covid-19 scams in India. My first taste of entrepreneurship.",
        websiteLink: "https://prabhavp380.wixsite.com/covicaller", 
        githubLink: "", 
        techStack: ["Javascript", "Wix"],
        startDate: new Date("2019-06-11"),
        endDate: new Date("2019-06-11"), 
        companyLogoImg: "/experience/covicaller/Gallery.PNG",
        pagesInfoArr: [
            {
                title: "",
                description: "",
                imgArr: [
                    "/experience/covicaller/news.png",
                    "/experience/covicaller/reddit.png",
                    

                ],
            },
        ],
        descriptionDetails: {
            paragraphs: [
                "Was interviwed by popular startup magazine - BangaloreInsider for this initiative. This was my first initiative towards exploring entrepreneurship, and I loved it!",
                "A website made to solve a critical problem in these pressing times – Fake contacts/duping scams offering COVID-19 Resources or Services in exchange for money; because no one deserves to loose a loved one.",
                "The website offers two roles:"
            ],
            bullets: [
                "Volunteer: If you have called any number(s) which claimed to offer any COVID-19 services, and they turned out to be a scam or otherwise, you can let the community know by filling out the form on the website.",
                "User: You just need to enter the number you wish to verify and all available testimonies for that number open up, which instrumentally help you decide if the contact is credible or not. You can also search for verified numbers by choosing a particular service.",
            ],
        },
    },
    
];

export const featuredExperiences = Experiences.slice(0, 3);