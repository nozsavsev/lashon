import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useCallback, useEffect, useState } from 'react'
import Filler from "../components/Filler";
import SplashScreen from "../components/Splash";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";

const LinerContentPC = (props: { fsize: string, root: string, first_option: string, second_option: string }) => {

    return <div className="flex justify-around text-neutral-500">
        <div className={`w-fit h-fit font-semibold select-none flex justify-center cursor-pointer ease-in-out duration-300 items-center hover:scale-125 ${props.root !== "404" ? "text-white font-semibold" : "font-thin"}`} style={{ fontSize: props.fsize }}>
            {(props.first_option && props.root !== "404") ? props.first_option : props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div className={`w-fit h-fit select-none flex justify-center cursor-pointer ease-in-out duration-300  items-center hover:scale-125 ${props.root !== "404" ? "text-white font-semibold" : "font-thin"}`} style={{ fontSize: props.fsize }}>
            {(props.second_option && props.root !== "404") ? props.second_option : props.root}
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
        <div className={`w-fit h-fit select-none flex justify-center cursor-pointer ease-in-out duration-300 items-center hover:scale-125 ${props.root !== "404" ? "text-white font-semibold" : "font-thin"}`} style={{ fontSize: props.fsize }}>
            {(props.option && props.root !== "404") ? props.option : props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
    </div>

}

const binyanei = ({ root, dataset, pcOptions, mbOptions }: any) => {

    const [splashOut, setSplashOut] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [usePC, setUsePC] = useState(false);
    const [fsize, setFsize] = useState("0rem");

    const router = useRouter();

    const onResize = useCallback(() => {

        let maxOpLen = Object.keys(dataset).sort((a, b) => b.length - a.length)[0].length;
        let slen = ((window.innerWidth > 768) ? root.length * 4 : root.length * 2) + maxOpLen;

        setWindowWidth(window.innerWidth);
        setFsize((window.innerWidth / (((window.innerWidth > 768) ? 0.7 : 0.5) * slen)) + "px")
    }, [router.query])

    useEffect(() => {
        window.addEventListener("resize", onResize.bind(this))
        onResize();
    }, [])

    useEffect(() => {
        setUsePC(windowWidth > 768);
    }, [windowWidth])

    useEffect(onResize.bind(this), [router.query])

    return <motion.div className={`w-screen min-h-screen md:h-screen flex items-center justify-center transition-colors ease-in-out duration-300 text-white ${splashOut ? "bg-black" : "bg-white"}`} >

        <Transitional_ZoomIn StartTransition={splashOut} className="w-full h-full shrink-0 flex flex-col">
            {
                !usePC ? mbOptions?.map((option, index) => {

                    return <Filler key={index} left={index % 2 == 0} >
                        <LinerContentMobile fsize={fsize} root={root as string} option={option} />
                    </Filler>

                }) : pcOptions?.map((option, index) => {

                    return <Filler key={index} left={index % 2 == 0} >
                        <LinerContentPC fsize={fsize} root={root as string} first_option={option.first_option} second_option={option.second_option} />
                    </Filler>
                })
            }

        </Transitional_ZoomIn>

        <SplashScreen autostart root={root as string} onSplashExitStart={() => {
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

export const getStaticPaths = async () => {

    return {
        paths: [
            { params: { r: "אבד" } },
            { params: { r: "אמר" } },
            { params: { r: "בחן" } },
            { params: { r: "בטח" } },
            { params: { r: "גבר" } },
            { params: { r: "גנן" } },
            { params: { r: "דלק" } },
            { params: { r: "חבר" } },
            { params: { r: "חדש" } },
            { params: { r: "חזק" } },
            { params: { r: "חזר" } },
            { params: { r: "חלל" } },
            { params: { r: "חמץ" } },
            { params: { r: "טבע" } },
            { params: { r: "טען" } },
            { params: { r: "יבש" } },
            { params: { r: "כפף" } },
            { params: { r: "למד" } },
            { params: { r: "נגד" } },
            { params: { r: "נהג" } },
            { params: { r: "לחם" } },
            { params: { r: "מלך" } },
            { params: { r: "סבר" } },
            { params: { r: "סכם" } },
            { params: { r: "פתח" } },
            { params: { r: "צדק" } },
            { params: { r: "צפה" } },
            { params: { r: "קבל" } },
            { params: { r: "קום" } },
            { params: { r: "שאל" } },
            { params: { r: "שמן" } },
            { params: { r: "שער" } },
            { params: { r: "תקף" } },
            { params: { r: "פסק" } },
            { params: { r: "עשה" } },
            { params: { r: "עקר" } },
            { params: { r: "ענה" } },
            { params: { r: "עלה" } },
            { params: { r: "עגל" } },
            { params: { r: "סבב" } }
        ],
        fallback: false, // can also be true or 'blocking'
    }
}



export const getStaticProps = async ({params}) => {
    const root = params.r;

    let api = "https://lashon-api.nozsa.com/api"
    let resp = await fetch(`${api}/compiledWord?root=${root}`);


    let optionSet = await resp.json();
    if (optionSet.length === 0)
        return {
            props: {
                root: "404"
            },
        }

    let mbOptions = Object.keys(optionSet).slice(1);

    let pcOptions = [];

    for (let i = 0; i < mbOptions.length; i += 2) {
        pcOptions.push({
            first_option: mbOptions[i],
            second_option: mbOptions[i + 1] || root
        });
    }

    while (pcOptions.length < 7)
        pcOptions.push({
            first_option: root,
            second_option: root
        });



    return {
        props: {
            root: root,
            dataset: optionSet,
            pcOptions: pcOptions,
            mbOptions: mbOptions,
        },
    }
}