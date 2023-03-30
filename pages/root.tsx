//@ts-nocheck

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useEffect, useState } from 'react'
import SplashScreen from "../components/Splash";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";

const Filler = (props: { children: JSX.Element, left: boolean }) => {

    return <div className="w-screen h-fit flex items-center overflow-hidden">

        <div className={`w-screen shrink-0 h-fit ${(props.left ? "spinner_left" : "spinner_right")}`} >
            {props.children}
        </div>

        <div className={`w-screen shrink-0 h-fit ${(props.left ? "spinner_left" : "spinner_right")} `}>
            {props.children}
        </div>

    </div>
}


const optionsPC = [
    {
        first_option: "פָּעַל",
        second_option: "נִפְעַל",
    },

    {
        first_option: "פִּעֵל",
        second_option: "פֻּעַל",
    },

    {
        first_option: "הִפְעִיל",
        second_option: "הֻפְעַל",
    },

    {
        first_option: "הִתְפַּעֵל",
        second_option: "מִקְטָל",
    },

    {
        first_option: "מִפְעָל",
        second_option: "מִקְטֶלֶת",
    },

    {
        first_option: "מִפְעֲלָה",
        second_option: "מִשְׁפָּט",
    },

    {
        first_option: "מִצְוָה",
        second_option: "מַעֲלֶה",
    },
]


const optionsMobile = [

    { option: "פָּעַל" },
    { option: "נִפְעַל" },



    { option: "פִּעֵל" },
    { option: "פֻּעַל" },



    { option: "הִפְעִיל" },
    { option: "הֻפְעַל" },



    { option: "הִתְפַּעֵל" },
    { option: "מִקְטָל" },



    { option: "מִפְעָל" },
    { option: "מִקְטֶלֶת" },



    { option: "מִפְעֲלָה" },
    { option: "מִשְׁפָּט" },



    { option: "מִצְוָה" },
    { option: "מַעֲלֶה" },

]




const LinerContentPC = (props: { fsize: string, root: string, first_option: string, second_option: string }) => {

    return <div className="flex justify-around text-neutral-500">
        <div className="w-fit h-fit font-semibold select-none flex justify-center cursor-pointer ease-in-out duration-300 items-center hover:scale-125 text-white" style={{ fontSize: props.fsize }}>
            {props.first_option ? props.first_option : props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div className="w-fit h-fit font-semibold select-none flex justify-center cursor-pointer ease-in-out duration-300  items-center hover:scale-125 text-white" style={{ fontSize: props.fsize }}>
            {props.second_option ? props.second_option : props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
    </div>

}

const LinerContentMobile = (props: { fsize: string, root: string, option: string }) => {

    return <div className="flex justify-around text-neutral-500">
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div className="w-fit h-fit font-semibold select-none flex justify-center cursor-pointer ease-in-out duration-300  items-center hover:scale-125 text-white" style={{ fontSize: props.fsize }}>
            {props.option ? props.option : props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
    </div>

}



const binyanei = ({ }: any) => {

    const [splashOut, setSplashOut] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [usePC, setUsePC] = useState(false);
    const [fsize, setFsize] = useState("0rem");

    const router = useRouter();

    useEffect(() => {

        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
            setFsize((window.innerWidth / 12 / ((window.innerWidth > 768) ? 21 : 11)) + "rem")
        })

        setWindowWidth(window.innerWidth);
        setFsize((window.innerWidth / 12 / ((window.innerWidth > 768) ? 21 : 11)) + "rem")

    }, [])

    useEffect(() => {
        setUsePC(windowWidth > 768);
    }, [windowWidth])

    return <motion.div className={`w-screen min-h-screen md:h-screen flex items-center justify-center ease-in-out duration-300 text-white ${splashOut ? "bg-black" : "bg-white"}`}>

        <Transitional_ZoomIn StartTransition={splashOut} className="w-full h-full shrink-0 flex flex-col">
            {
                !usePC ? optionsMobile.map((option, index) => {

                    return <Filler key={index} left={index % 2 == 0} >
                        <LinerContentMobile fsize={fsize} root={router.query.r} option={option.option} />
                    </Filler>

                }) : optionsPC.map((option, index) => {

                    return <Filler key={index} left={index % 2 == 0} >
                        <LinerContentPC fsize={fsize} root={router.query.r} first_option={option.first_option} second_option={option.second_option} />
                    </Filler>
                })
            }

        </Transitional_ZoomIn>

        <SplashScreen autostart root={router.query.r} onSplashExitStart={() => {
            setSplashOut(true);
        }} />

    </motion.div >
}

export default binyanei;






class Word {
    public word: string
    public meaning: string
    constructor(word: string, meaning: string) {
        this.word = word;
        this.meaning = meaning;
    }

}



const vals = {
    "פָּעַל": [new Word("לַחְשׁוֹב", "to think")],
    "נִפְעַל": [new Word("לְהֵיחָשֵׁב", "to be considered as")],
    "פִּעֵל": [new Word("לְחַשֵּׁב", "to calculate")],
    "פֻּעַל": [],
    "הִפְעִיל": [new Word("לַחְשׁוֹב", "to value, to esteem")],
    "הֻפְעַל": [],
    "הִתְפַּעֵל": [new Word("לְהִתְחַשֵּׁב", "to consider, to take into account")],

    "מִקְטָל": [],
    "מִפְעָל": [],
    "מִקְטֶלֶת": [],
    "מִפְעֲלָה": [],
    "מִשְׁפָּט": [],
    "מִצְוָה": [],
    "מַעֲלֶה": [],
}