import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useCallback, useEffect, useState } from 'react'
import Filler from "../components/Filler";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";
import root_database from "../root_database";
import SplashHello from "../components/SplashHello";

import words from "../words";
import AboutWidget from "../components/AboutWidget";

const About = ({ roots }: { roots: string[] }) => {

    const router = useRouter();

    const [splashOut, setSplashOut] = useState(false);

    return <motion.div layout className={`w-screen h-screen bg-black text-white transition-colors ease-in-out duration-300 flex flex-col justify-center items-center`}>


        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="flex flex-col justify-start items-start my-16">
            <motion.div className="text-neutral-500 text-2xl">
                Powered by
            </motion.div>
            <motion.div className="text-5xl">
                Ilia Nozdrachev
            </motion.div>
        </motion.div>


        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-thin text-4xl">
            Hi there
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-thin text-3xl mb-16">
            This is my lashon project
        </motion.div>


        <motion.a href="/" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="border text-3xl flex items-center justify-center border-white rounded-lg px-4 py-2">
            check it out
            <BsFillPlayFill className="ml-7" height="64" width="64" />
        </motion.a>



    </motion.div >

}

export default About





function BsFillPlayFill(props) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" {...props}><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" /></svg>;
}