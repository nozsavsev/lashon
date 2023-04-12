import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useCallback, useEffect, useState } from 'react'
import Filler from "../components/Filler";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";
import root_database from "../root_database";
import SplashHello from "../components/SplashHello";

import AboutWidget from "../components/AboutWidget";

const About = ({ roots }: { roots: string[] }) => {

    const router = useRouter();

    const [splashOut, setSplashOut] = useState(false);

    return <motion.div layout className={`w-screen pb-16 p-4 min-h-screen bg-black text-white transition-colors ease-in-out duration-300 flex flex-col justify-center items-center`}>


        <Head>
            <title>Lashon - by Ilia Nozdrachev</title>
            <link rel="icon" type="image/x-icon" href={"/favicon_black.png"} />

            <meta property="og:title" content="Read about my lashon project" />
            <meta property="og:site_name" content="Lashon - by Ilia Nozdrachev" />
            <meta property="og:url" content="https://lashon.nozsa.com/about" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://lashon.nozsa.com/favicon_black.png" />
        </Head>




        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="flex flex-col justify-start items-start my-16">
            <motion.div className="text-neutral-500 text-2xl">
                Created By
            </motion.div>
            <motion.div className="text-5xl">
                Ilia Nozdrachev
            </motion.div>
        </motion.div>


        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-thin text-4xl">
            Hi there
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-thin text-3xl">
            This is my lashon project
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col justify-start text-2xl items-start my-8">

            Basically what i did is
            <ul className="list-disc ml-8 text-xl my-7">
                <li>Downloaded all the words from pealim website</li>
                <li>Created a database with all the words</li>
                <li>Set up relations</li>
                <li>Selected 40 roots</li>
                <li>Designed & implemented all this</li>
            </ul>
        </motion.div>


        <motion.a href="/" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="border text-3xl flex items-center justify-center border-white rounded-lg px-4 py-2">
            Сheck it out
            <BsFillPlayFill className="ml-7" height="64" width="64" />
        </motion.a>



    </motion.div >

}

export default About





function BsFillPlayFill(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" /></svg>;
}