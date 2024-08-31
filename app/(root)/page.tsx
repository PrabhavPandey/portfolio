import Link from "next/link";
import Image from "next/image";
import heroImg from "@/public/prabhav_img.png";
import hug from "@/public/extra/hug.webp"
import SkillsCard from "@/components/skills-card";
import { cn } from "@/config/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredSkills } from "@/config/skills";
import { Icons } from "@/components/icons";
import { pagesConfig } from "@/config/pages";
import { featuredExperiences } from "@/config/experience";
import ProjectCard from "@/components/project-card";
import { featuredContributions } from "@/config/contributions";
import ContributionCard from "@/components/contribution-card";
import UserLocation from "@/components/user-location";
import CalendlyEmbed from "@/components/calendly-embed";
import EducationCard from "@/components/education-card";
import { featuredEducation } from "@/config/education";


export default function IndexPage() {
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 h-screen flex items-center">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-20">
                    <Image
                        src={heroImg}
                        height={100}
                        width={100}
                        sizes="100vw"
                        className="bg-primary rounded-full mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
                        alt="prabhav-img"
                    />
                    <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Prabhav Pandey
                    </h1>
                    <h3 className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl">
                        Builder🛠️ | Student🎓 | Webflow Developer👨🏻‍💻
                    </h3>
                    <p className="leading-normal font-medium text-muted-foreground sm:text-lg sm:leading-7 md:w-[50%]">
                        Final year engineering student with an interest in product, data and entrepreneurship.
                    </p>
                    <div className="flex flex-col  mt-10 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
                        <Link
                            href={"/#contact"}
                            className={cn(buttonVariants({ size: "lg" }))}
                        >
                            <Icons.contact className="w-4 h-4 mr-2" /> Get in Touch
                        </Link>
                        <Link
                            href={"https://drive.google.com/file/d/1i30S80UypIVVG_VgxImdtz9iBAJ3bgWQ/view?usp=drive_link"}
                            target="_blank"
                            rel="noreferrer"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                })
                            )}
                        >
                            <Icons.resume className="w-4 h-4 mr-2" /> Resumé
                        </Link>
                    </div>
                    <Icons.chevronDown className="h-6 w-6 mt-10" />
                </div>
            </section>
            <section
                id="education"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Education
                    </h2>
                    <p className="w-[86vw] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        My academic journey.
                    </p>
                </div>
                <EducationCard education={featuredEducation} />
            </section>
            <section
                id="experience"
                className="space-y-6 dark:bg-transparent py-4 md:py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.experience.title}
                    </h2>
                    <p className="w-[86vw] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.experience.description}
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3">
                    {featuredExperiences.map((exp) => (
                        <ProjectCard key={exp.id} project={exp} />
                    ))}
                </div>
                <Link href="/experience" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
            </section>

            <section
                id="skills"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.skills.title}
                    </h2>
                    <p className="w-[86vw] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.skills.description}
                    </p>
                </div>
                <SkillsCard skills={featuredSkills} />
                <Link href="/skills" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
            </section>

            <section
                id="contributions"
                className="container space-y-6 bg-slate-50 dark:bg-transparent py-10 my-14"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.contributions.title}
                    </h2>
                    <p className="w-[86vw] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        {pagesConfig.contributions.description}
                    </p>
                </div>
                <div className="mx-auto justify-center gap-4  md:w-full lg:grid-cols-3">
                    <ContributionCard contributions={featuredContributions} />
                </div>
                <Link href="/contributions" className="flex justify-center">
                    <Button variant={"outline"} className="rounded-xl">
                        <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
                    </Button>
                </Link>
            </section>

            <section
                id="contact"
                className="container space-y-4 bg-slate-50 dark:bg-transparent"
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-3 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        {pagesConfig.contact.title}
                    </h2>
                    <p className="w-[84vw] leading-normal text-gray-700 dark:text-gray-200 sm:text-xl sm:leading-8">
                        {pagesConfig.contact.description}
                    </p>
                    <CalendlyEmbed
                        url="https://calendly.com/prabhavpandey/30minute?hide_gdpr_banner=1"
                        text="Calendly - Let's talk!"
                        color=" #0069ff"
                        textColor="#ffffff"
                        branding={false}
                        />
                    <Image
                        src={hug}
                        height={100}
                        width={100}
                        sizes="100vw"
                        className="mb-0 h-auto md:mb-2 w-[60%] max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
                        alt="hug-gif"
                    />
                    <UserLocation />
                </div>
            </section>
        </>
    );
}