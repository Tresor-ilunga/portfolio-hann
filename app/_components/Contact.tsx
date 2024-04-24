import { Badge } from "lucide-react";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
    return <Section className="flex flex-col items-start gap-4">
        {/* <Badge variant={"outline"}>Skills</Badge> */}
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I will be happy to work with you 
        </h2>
        <div className="flex max-md:flex-col w-full gap-4">
                <ContactCard 
                classNmae="flex-1"
                    name="@tresor-ilunga"
                    image="/images/tresor.webp" 
                    mediumImage="/images/x.png"
                    description="16'0000"
                    url="#"
                />
                <ContactCard 
                classNmae="flex-1"
                    name="Trésor Ilunga"
                    image="/images/tresor.webp" 
                    mediumImage="/images/linkedin.png"
                    description="12'0000"
                    url="#"
                />
                <ContactCard 
                classNmae="flex-1"
                    name="contact@tresor.com"
                    image="/images/tresor.webp" 
                    mediumImage="/images/linkedin.png"
                    description="Email me for any inquiries"
                    url="mailto:contact@tresor.com"
                />
        </div>
    </Section>
}