import { Badge } from "lucide-react";
import { Section } from "./Section";
import { SymfonyLogo } from "./icons/SymfonyLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { OpenAILogo } from "./icons/OpenAILogo";

export const Skills = () => {
    return <Section className="flex flex-col items-start gap-4">
        {/* <Badge variant={"outline"}>Skills</Badge> */}
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            I love working on... 
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                <SymfonyLogo 
                size={42}
                />
                <h3 className="text-2xl font-semibold tracking-tight">Symfony</h3>
                <p className="text-sm text-muted-foreground">
                    Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.
                </p>
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <ReactLogo 
                size={42}
                className="animate-spin"
                style={{
                    animationDuration: "10s",
                }}
                />
                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground">
                    Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.
                </p>
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <OpenAILogo 
                size={42}
                />
                <h3 className="text-2xl font-semibold tracking-tight">OpenAI</h3>
                <p className="text-sm text-muted-foreground">
                    Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.
                </p>
            </div>
        </div>
    </Section>
}