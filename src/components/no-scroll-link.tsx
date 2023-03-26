import Link, {LinkProps} from "next/link";
import {ReactNode} from "react";

interface Props extends LinkProps {
    children?: ReactNode
    className?: string
}

export default function NoScrollLink(props: Props) {
    return (
        <Link scroll={false} {...props}/>
    )
}