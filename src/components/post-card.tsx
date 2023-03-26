import styles from "./post-card.module.scss";
import MdIcon from '@mdi/react'
import {mdiArrowRight} from '@mdi/js'
import React from "react";
import NoScrollLink from "@/components/no-scroll-link";

interface Props {
    title: string
    desc?: string
    image?: string
    time?: string
    url: string
}

export default function PostCard({title, desc, image, time, url}: Props) {
    return (
        <NoScrollLink href={`/view/${url}`}>
            <div className={styles.card}>
                {image && <img src={image} alt={title}/>}
                <div>
                    <div>
                        {time && <p>{time}</p>}
                        <h1>{title}</h1>
                        {desc && <p>{desc}</p>}
                    </div>
                    <MdIcon path={mdiArrowRight}/>
                </div>
            </div>
        </NoScrollLink>
    )
}