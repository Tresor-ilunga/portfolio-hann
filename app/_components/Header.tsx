import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { TwitterIcon } from "./icons/TwitterIcon"
import { FacebookIcon } from "./icons/FacebookIcon"


export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    Tresor.com
                </h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link 
                    href="https://www.linkedin.com/in/tresor-ilunga"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <LinkedinIcon size={12} className="text-foreground" />
                    </Link>
                    <Link 
                    href="https://www.twitter.com/tresor_ilunga"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <TwitterIcon size={12} className="text-foreground" />
                    </Link>
                    <Link 
                    href="https://www.facebook.com/tresor.ilunga"
                    className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}
                    >
                        <FacebookIcon size={12} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    )
}