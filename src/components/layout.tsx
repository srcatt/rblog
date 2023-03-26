import {ReactNode} from "react";
import {NextSeo} from "next-seo";
import {blogTitle} from "@/lib/seo";
import NoScrollLink from "@/components/no-scroll-link";

interface Props {
    title?: string
    footer?: boolean
    children?: ReactNode
}

export default function Layout({title, footer = true, children}: Props) {
    return (
        <>
            <NextSeo title={title ? `${blogTitle} | ${title}` : blogTitle} description="hi"/>
            {children}
            {footer && <footer className="section">
                <div className="divider"/>
                <NoScrollLink href="/">
                    <h1 className="text-3xl md:text-5xl">
                        zhlee&apos;s blog
                    </h1>
                </NoScrollLink>
            </footer>}
        </>
    )
}