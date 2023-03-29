import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { useEffect } from "react";



const er_500 = ({ }: any) => {

    const router = useRouter();

    return <motion.div className='w-screen h-screen flex items-center divide-x-2 justify-center bg-black text-white'>

        <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} className="px-5 font-semibold text-3xl h-14 flex items-center justify-center">
            500
        </motion.div>

        <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} className="px-5 text-lg h-14 flex items-center justify-center">
            Something went wrong :(
        </motion.div>

    </motion.div >
}

export default er_500;