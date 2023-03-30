//@ts-nocheck

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useEffect, useState } from 'react'
import SplashScreen from "../components/Splash";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";

const binyanei = ({ }: any) => {

    const router = useRouter();

    return <motion.div className={`w-screen min-h-screen md:h-screen flex items-center justify-center ease-in-out duration-300 text-black bg-white`}>


        <RootCard root="חשב" />

    </motion.div >
}



const RootCard = (props: { root: string, }) => {

    const router = useRouter();

    return <div style={{ fontSize: "20rem" }} className="font-semibold select-none cursor-pointer" onClick={() => router.push(`/root?r=${props.root}`)}>
        {props.root}
    </div>

}



export default binyanei;