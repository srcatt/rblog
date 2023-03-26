import '@/styles/globals.scss'
import '@/styles/scroll.css'

import type {AppProps} from 'next/app'
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import {useRef} from "react";
import {useRouter} from "next/router";
import {dmSans} from "@/lib/fonts";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    const containerRef = useRef(null)
    const {route} = useRouter()
    return <>
        <Head>
            <meta
                name='viewport'
                content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
            />
            <link rel="manifest" href="/manifest.json"/>
            <meta name="application-name" content="zhlee's Blog"/>
            <meta name="theme-color" content="#252b43"/>
            <meta name="msapplication-TileColor" content="#252b43"/>
            <meta name="msapplication-tap-highlight" content="no"/>
            <link rel="apple-touch-icon" href="/icon-192.png"/>

        </Head>
        <LocomotiveScrollProvider
            options={{smooth: true}}
            containerRef={containerRef}
            watch={[route]}>
            <main data-scroll-container="" ref={containerRef} className={dmSans.className}>
                <Component {...pageProps} />
            </main>
        </LocomotiveScrollProvider>
    </>
}
