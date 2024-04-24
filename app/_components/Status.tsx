import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { ArrowUpRight, Badge, Code, LucideIcon, MessageCircle, Rss, StickyNote } from "lucide-react";
import { SideProject, SIDE_PROJECTS } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { Work, WORKS } from "./Work";


export const Status = () => {
    return <Section className="flex max-md:flex-col items-start gap-4">
        <div className="flex-[3] w-full">
            <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Side, fun projects.</p>
            <div className="flex flex-col gap-4">
                {SIDE_PROJECTS.map((project, index) => (
                    <SideProject 
                    key={index}
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url="/"
                    />
                ))}
            </div>
            </Card>
        </div>
        <div className="flex-[2] w-full flex flex-col gap-4">
            <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground">Work</p>
            <div className="flex flex-col gap-4">
                {WORKS.map((work, index) => (
                    <Work 
                        key={index}
                        {...work}
                    />
                ))}
            </div>
            </Card>
            <Card className="p-4 flex-1 flex flex-col gap-2">
                <p className="text-lg text-muted-foreground">Contact me</p>
                <ContactCard 
                    name="@tresor-ilunga"
                    image="/images/tresor.webp" 
                    mediumImage="/images/x.png"
                    description="16'0000"
                    url="#"
                />
                <ContactCard 
                    name="Trésor Ilunga"
                    image="/images/tresor.webp" 
                    mediumImage="/images/linkedin.png"
                    description="12'0000"
                    url="#"
                />
            </Card>
        </div>
    </Section>
};






