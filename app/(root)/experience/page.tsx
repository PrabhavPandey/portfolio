"use client";

import { useState } from "react";

import ProjectCard from "@/components/project-card";
import PageHeader from "@/components/page-header";
import { cn } from "@/lib/utils";
import { Experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { metadata } from "./metadata"; // Import metadata

function ProjectContainer({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-center justify-center mb-4 md:mb-0 w-full",
                className
            )}
            {...props}
        />
    );
}

const renderContent = (tabVal: string) => {
    let expArr = Experiences;
    if (tabVal === "personal") {
        expArr = expArr.filter((val) => val.type === "Personal Project");
    } else if (tabVal === "Webflow") {
        expArr = expArr.filter((val) => val.type === "Webflow");
    } else if (tabVal === "Internships") {
        expArr = expArr.filter((val) => val.type === "Internships");
    }

    return (
        <div className="mx-auto grid justify-center gap-4  md:w-full lg:grid-cols-3 mt-6">
            {expArr.map((exp) => (
                <ProjectContainer key={exp.id}>
                    <ProjectCard project={exp} />
                </ProjectContainer>
            ))}
        </div>
    );
};

export default function ExperiencePage() {
    const [selectedTab, setSelectedTab] = useState("all");

    return (
        <>
            <PageHeader
                title={pagesConfig.experience.title}
                description={pagesConfig.experience.description}
            />
            <div className="block md:hidden">
                <select
                    className="w-full p-2 border rounded"
                    value={selectedTab}
                    onChange={(e) => setSelectedTab(e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="Internships">Internships</option>
                    <option value="Webflow">Webflow</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
            <Tabs defaultValue="all" className="hidden md:block w-full">
                <TabsList className="container grid max-w-[30rem] grid-cols-4">
                    <TabsTrigger value="all" onClick={() => setSelectedTab("all")}>All</TabsTrigger>
                    <TabsTrigger value="Internships" onClick={() => setSelectedTab("Internships")}>Internships</TabsTrigger>
                    <TabsTrigger value="Webflow" onClick={() => setSelectedTab("Webflow")}>Webflow</TabsTrigger>
                    <TabsTrigger value="personal" onClick={() => setSelectedTab("personal")}>Personal</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="w-full">
                    {renderContent("all")}
                </TabsContent>
                <TabsContent value="Internships">
                    {renderContent("Internships")}
                </TabsContent>
                <TabsContent value="Webflow">
                    {renderContent("Webflow")}
                </TabsContent>
                <TabsContent value="personal">
                    {renderContent("personal")}
                </TabsContent>
            </Tabs>
            <div className="block md:hidden">
                {renderContent(selectedTab)}
            </div>
        </>
    );
}