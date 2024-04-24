import { ComponentPropsWithRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link.js";
import { Code } from "./Code";



export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full flex flex-col gap-2">
                <h2 className="font-caption font-bold text-5xl text-primary">Tresor ilunga</h2>
                <h3 className="text-3xl font-caption">Softwar developer and creator</h3>
                <p className="text-base">
                    I love creating content on {" "}
                    <Link href="https://www.linkedin.com/in/tresor-ilunga">
                        <Code className="inline-flex items-center gap-1">
                            <LinkedinIcon size={16} className="inline" /> Linkedin
                        </Code>
                    </Link>
                </p>
            </div>
            <div className="flex-[2] max-md:m-auto ml-auto">
                <img 
                    src="/images/tresor.webp" 
                    alt="tresor" 
                    className="w-full h-auto max-w-xs max-md:w-56" 
                />
            </div>
        </Section>
    );
};
