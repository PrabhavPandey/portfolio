import { StaticImageData } from "next/image";
import snuImg from "@/public/extra/snu.webp";
import kumaransImg from "@/public/extra/kumarans.jpg";
import kumaransTenth from "@/public/extra/kumarans_tenth.jpeg";

export interface EducationInterface {
  image: StaticImageData;
  institution: string;
  years: string;
  subject: string;
  grade: string;
}

export const educationDetails: EducationInterface[] = [
  {
    image: snuImg,
    institution: "Shiv Nadar University - Delhi NCR (Greater Noida)",
    years: "2021-2025 (hopefully)",
    subject: "B.Tech, ECE",
    grade: "CGPA: 8.0/10",
  },
  {
    image: kumaransImg,
    institution: "Sri Kumaran Children's Home - CBSE (Bangalore)",
    years: "2019 - 2021",
    subject: "Senior Secondary, Science(PCMC)",
    grade: "Class 12 - 94%",
  },
  {
    image: kumaransTenth,
    institution: "Sri Kumaran Children's Home - CBSE (Bangalore)",
    years: "2009 - 2019",
    subject: "High School",
    grade: "Class 10 - 93%",
  },
];

export const featuredEducation = educationDetails.slice(0, 3);