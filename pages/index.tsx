import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { Component, ReactElement, useCallback, useEffect, useState } from 'react'
import Filler from "../components/Filler";
import Transitional_ZoomIn from "../components/Transitional_ZoomIn";
import root_database from "../root_database";
//import axios from 'axios';

const binyanei = ({ roots }: { roots: string[] }) => {

    const router = useRouter();

    return <div className={`w-screen min-h-screen text-black bg-white flex flex-wrap justify-center items-center`}>
        {
            roots.map(root => <RootCard key={root} root={root} />)
        }
    </div >
}



export default binyanei;


const RootCard = ({ root }: { root: string }) => {

    const router = useRouter();

    return <a
        className="flex items-center justify-center bg-white shrink-0 text-7xl rounded-lg overflow-visivle h-fit select-none cursor-pointer"
        href={`/${root}`}>
        <div className="w-full h-full px-12 py-8 hover:scale-150 transition ease-in-out duration-300 z-10 hover:z-0">
            {root}
        </div>
    </a>
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

