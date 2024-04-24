import Link from "next/link.js";
import { ArrowUpRight, Badge, Code, LucideIcon, MessageCircle, Rss, StickyNote } from "lucide-react";

export type SideProjectProps = {
    Logo: LucideIcon,
    title: string,
    description: string,
    url: string,
};

export const SideProject = (props: SideProjectProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        >
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.Logo size={16} />
            </span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            
        </Link>
    )
};

export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Code,
        title: "Lorem title",
        description: "Lorem description",
        url: ""
    },
    {
        Logo: StickyNote,
        title: "Lorem title",
        description: "Lorem description",
        url: ""
    },
    {
        Logo: Rss,
        title: "Lorem title",
        description: "Lorem description",
        url: ""
    },
    {
        Logo: MessageCircle,
        title: "Lorem title",
        description: "Lorem description",
        url: ""
    },
    {
        Logo: MessageCircle,
        title: "Lorem title",
        description: "Lorem description",
        url: ""
    },
    {
        Logo: MessageCircle,
        title: "Lorem title",
        description: "Lorem description",
        url: ""
    }
]