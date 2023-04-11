import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import Filler from "../components/Filler";
import SplashScreenRoot from "../components/SplashRoot";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";
import { Word } from "@prisma/client";
import { useSwipeable } from "react-swipeable";
import AboutWidget from "../components/AboutWidget";
import Head from "next/head";

const LinerContentPC = (props: { fsize: string, root: string, first_option: string, second_option: string, onOption: any }) => {

    const onResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        window.addEventListener("resize", onResize.bind(this))
        onResize();
    }, [])


    return <div className="flex justify-around text-neutral-500" style={{ lineHeight: `${windowHeight / 7}px` }}>
        <div
            onClick={(e) => { props.onOption(props.first_option); e.stopPropagation(); }}
            className={`w-fit h-fit font-semibold select-none flex justify-center cursor-pointer ease-in-out duration-300 items-center hover:scale-125 ${props.root !== "404" ? "text-white font-semibold" : "font-thin"}`} style={{ fontSize: props.fsize }}>
            {(props.first_option && props.root !== "404") ? props.first_option : props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div
            onClick={(e) => { props.onOption(props.second_option); e.stopPropagation(); }}
            className={`w-fit h-fit select-none flex justify-center cursor-pointer ease-in-out duration-300  items-center hover:scale-125 ${props.root !== "404" ? "text-white font-semibold" : "font-thin"}`} style={{ fontSize: props.fsize }}>
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

const LinerContentMobile = (props: { fsize: string, root: string, option: string, onOption: any }) => {

    return <div className="flex justify-around text-neutral-500">
        <div className="w-fit h-fit font-thin select-none flex justify-center items-center" style={{ fontSize: props.fsize }}>
            {props.root}
        </div>
        <div
            onClick={(e) => { props.onOption(props.option); e.stopPropagation(); }}
            className={`w-fit h-fit select-none flex justify-center cursor-pointer ease-in-out duration-300 items-center hover:scale-125 ${props.root !== "404" ? "text-white font-semibold" : "font-thin"}`} style={{ fontSize: props.fsize }}>
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
    const [windowHeight, setWindowHeight] = useState(0);
    const [usePC, setUsePC] = useState(false);
    const [fsize, setFsize] = useState("0rem");

    const router = useRouter();

    const onResize = () => {

        let maxMobileOption = mbOptions.map(o => o.replace(/[\u0591-\u05C7]/gm, "")).sort((a, b) => b.length - a.length)[0];

        let maxPcOption = pcOptions.map(o => (o.first_option + o.second_option).replace(/[\u0591-\u05C7]/gm, "")).sort((a, b) => b.length - a.length)[0];
        console.log("maxMobileOption", maxMobileOption);
        console.log("maxPcOption", maxPcOption);

        let maxOpLen = (window.innerWidth > 768) ? maxPcOption.length : maxMobileOption.length * 1.5;


        let slen = ((window.innerWidth > 768) ? root.length * 4 : root.length * 2) + maxOpLen;

        let fsizeX = (window.innerWidth / (((window.innerWidth > 768) ? 0.7 : 0.5) * slen));
        let fsizeY_max = window.innerHeight / 7

        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);

        setFsize((fsizeX <= fsizeY_max ? fsizeX : fsizeY_max) + "px")
    }

    useEffect(() => {
        window.addEventListener("resize", onResize.bind(this))
        onResize();
    }, [])

    useEffect(() => {
        setUsePC(windowWidth > 768);
    }, [windowWidth])

    const [showPopup, setShowPopup] = useState(false);
    const [popupOption, setPopupOption] = useState<any>(mbOptions[0])

    return <>


        <Head>
            <title>Lashon - by Ilia Nozdrachev</title>
            <link rel="icon" type="image/x-icon" href={splashOut ? "/favicon_black.png" : "/favicon_white.png"} />

            <meta property="og:title" content={root} />
            <meta property="og:site_name" content="Lashon" />
            <meta property="og:url" content="https://lashon.nozsa.com" />
            <meta property="og:description" content={`${root} and all it's words`} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://lashon.nozsa.com/favicon_black.png" />

        </Head>


        <motion.div
            className={`w-screen min-h-screen overflow-scroll flex items-center justify-center transition-colors ease-in-out duration-300 text-white ${splashOut ? "bg-black" : "bg-white h-screen overflow-hidden"}`}
            onClick={() => {
                setShowPopup(false);
            }}
        >

            <Head>
                <title>{root}</title>
            </Head>

            <Transitional_ZoomIn StartTransition={splashOut} className="w-full h-full shrink-0 flex flex-col">
                {
                    !usePC ? mbOptions?.map((option, index) => {

                        return <Filler key={index} left={index % 2 == 0} >
                            <LinerContentMobile fsize={fsize} root={root as string} onOption={(o) => {
                                if (o !== root)
                                    setPopupOption(o);
                                setShowPopup(o !== root);
                            }} option={option} />
                        </Filler>

                    }) : pcOptions?.map((option, index) => {

                        return <Filler key={index} left={index % 2 == 0} >
                            <LinerContentPC onOption={(o) => {
                                if (o !== root)
                                    setPopupOption(o);
                                setShowPopup(o !== root);
                            }} fsize={fsize} root={root as string} first_option={option.first_option} second_option={option.second_option} />
                        </Filler>
                    })
                }
            </Transitional_ZoomIn>

            <SplashScreenRoot autostart root={root as string} onSplashExitStart={() => {
                setSplashOut(true);
            }} />

            <Popup show={showPopup} activeOption={popupOption} options={mbOptions} dataset={dataset} setActiveOption={(o) => { setPopupOption(o) }} onClose={() => { setShowPopup(false) }} />

        </motion.div >
        <AboutWidget light={!splashOut} />
    </>
}

export default binyanei;





const Popup = ({ show, onClose, activeOption, dataset, setActiveOption, options }) => {


    const keyDownHandler = useCallback((event) => {

        let locOpt = null;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            let index = options.indexOf(activeOption);
            if (index < options.length - 1) { setActiveOption(options[index + 1]); locOpt = options[index + 1]; }
            else { setActiveOption(options[0]); locOpt = options[0]; }
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            let index = options.indexOf(activeOption);
            if (index > 0) { setActiveOption(options[index - 1]); locOpt = options[index - 1]; }
            else { setActiveOption(options[options.length - 1]); locOpt = options[options.length - 1]; }
        }


        if (scrollerRef.current) {
            let index = options.indexOf(locOpt);
            (index);
            let offset = (index * 50) - 50;
            scrollerRef.current.scrollTo({ top: offset, behavior: "smooth" });
        }


    }, [activeOption])

    const swipeHandler = useCallback((direction: "up" | "down" | "left" | "right") => {

        let locOpt = null;

        if (direction === "right" || direction === "down") {
            let index = options.indexOf(activeOption);
            if (index < options.length - 1) { setActiveOption(options[index + 1]); locOpt = options[index + 1]; }
            else { setActiveOption(options[0]); locOpt = options[0]; }
        }

        if (direction === "left" || direction === "up") {
            let index = options.indexOf(activeOption);
            if (index > 0) { setActiveOption(options[index - 1]); locOpt = options[index - 1]; }
            else { setActiveOption(options[options.length - 1]); locOpt = options[options.length - 1]; }
        }


        if (scrollerRef.current) {
            let index = options.indexOf(locOpt);
            (index);
            let offset = (index * 50) - 50;
            scrollerRef.current.scrollTo({ top: offset, behavior: "smooth" });
        }


    }, [activeOption])

    useEffect(() => {

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        }

    }, [activeOption])


    const scrollerRef = useRef<any>(null);

    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => swipeHandler("right"),
        onSwipedRight: (eventData) => swipeHandler("left"),
        onSwipedUp: (eventData) => swipeHandler("up"),
        onSwipedDown: (eventData) => swipeHandler("down"),

    });

    return show && <>

        <motion.div
            onScroll={(e) => { e.stopPropagation() }}
            initial={{ opacity: 0, backgroundColor: "black" }}
            animate={{ opacity: 0.75, backgroundColor: "black" }}
            className="bg-black top-0 left-0 w-screen h-screen fixed">

            <div className="bg-black w-screen sticky" />

        </motion.div>

        <motion.div
            {...handlers}
            onScroll={(e) => { e.stopPropagation() }}
            initial={{ scale: 0.5 }}
            animate={{
                scale: 1,
            }}
            className="w-screen h-screen top-0 left-0 fixed pointer-events-none flex justify-center items-center">


            <motion.div
                onClick={(e) => { e.stopPropagation() }}
                className="w-11/12 h-4/6 md:w-3/6 md:h-4/6 overflow-hidden rounded-xl backdrop-blur-md flex flex-col justify-center items-center pointer-events-auto border border-neutral-800"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
            >

                <div className="w-full h-full flex justify-between p-0 m-0">

                    <div className="w-full lg:w-1/6 md:w-2/6 mx-4 px-6 overflow-y-scroll hidden lg:block" ref={scrollerRef}>
                        <div className="hidden lg:flex items-center flex-col w-full justify-center font-thin">
                            {
                                options?.map((option, index) => {
                                    return <div
                                        key={index}
                                        className={`shrink-0 py-2 whitespace-nowrap cursor-pointer text-2xl hidden lg:block
                                    ${(option === activeOption) ? "text-white font-semibold" : "text-neutral-400"} 
                                    ${index === options.length - 1 ? "mb-8" : ""} 
                                    ${index === 0 ? "mt-8" : ""}
                                    `}
                                        onClick={() => {
                                            setActiveOption(option)
                                            let offset = (index * 50) - 50;
                                            scrollerRef.current.scrollTo({ top: offset, behavior: "smooth" });
                                        }}
                                    >
                                        {option}
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="lg:w-5/6 w-full h-full flex flex-col overflow-visible">

                        <div className="flex">
                            <div className="w-full text-4xl md:text-4xl font-semibold pb-4 pt-2 px-0 md:pb-6 md:pt-4 flex justify-center items-center">
                                {activeOption} - {dataset.root}
                            </div>

                            <div className="w-0 lg:w-3/12 hidden lg:block" />
                        </div>

                        <div className="m-3 md:m-8 h-full lg:block flex flex-col items-start justify-scenter" dir="rtl">
                            {
                                dataset[activeOption]?.map((word: Word, index) => {
                                    return <div key={index} className=" text-lg md:text-2xl flex my-4 pb-4">

                                        <div className="font-semibold mx-1">
                                            {word.word}
                                        </div>
                                        <div className="mx-1 flex">
                                            -
                                            <div className="flex flex-col mx-1">
                                                {word.meaning.map((m, i) => {
                                                    return <div key={i}>{m}</div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                        <div className="w-full h-fit flex lg:hidden my-3 items-center justify-center">
                            {

                                options?.map((option, index) => {
                                    return <div className={`h-2 w-2 rounded-full mx-1 ${option === activeOption ? "bg-neutral-400" : "bg-neutral-800"}`} />

                                })

                            }
                        </div>

                    </div>

                </div>
            </motion.div>
        </motion.div>
    </>
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


export const getStaticProps = async ({ params }) => {
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