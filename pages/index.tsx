import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useCallback, useEffect, useState } from 'react'
import Filler from "../components/Filler";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";
import root_database from "../root_database";
import SplashHello from "../components/SplashHello";
import WordCloud from 'react-d3-cloud';

import words from "../words";

const binyanei = ({ roots }: { roots: string[] }) => {

    const router = useRouter();

    const [splashOut, setSplashOut] = useState(false);

    return <div className={`w-screen h-screen text-black transition-colors ease-in-out duration-300 ${splashOut ? "bg-white" : "bg-black"}`}>

        <Transitional_ZoomIn delay={0} StartTransition={splashOut} className="flex flex-wrap justify-around items-center w-screen min-h-screen grid-cols-5">


            {
                roots.map(root => {

                    //randomly choose between 1 and -1
                    let x = (Math.random() < 0.5 ? -1 : 1);
                    let y = (Math.random() < 0.5 ? -1 : 1);

                    return <RootCard key={root} root={root} x={100 * x} y={100 * y} />
                })
            }
        </Transitional_ZoomIn>

        <SplashHello  onSplashExitStart={() => {
            setSplashOut(true);
        }} />
    </div >

}



export default binyanei;


const RootCard = ({ root, x, y }: { root: string, x: number, y: number }) => {

    const router = useRouter();

    return <motion.a
        initial={{ y: y, x: x, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
        className="flex items-center justify-center shrink-0 md:text-7xl text-6xl rounded-lg overflow-visible h-fit select-none cursor-pointer"
        href={`/${root}`}>
        <div className="w-full h-full py-2 px-4 md:px-12 md:py-8 hover:scale-150 transition ease-in-out duration-300 z-10 hover:z-0 font-thin">
            {root}
        </div>
    </motion.a>
}

export const getStaticProps = async ({ params }) => {

    let api = "https://lashon-api.nozsa.com/api";
    let resp = await fetch(`${api}/allRoots`);

    return {
        props: {
            roots: (await resp.json()).map(root => root.root)
        },
    }
}

