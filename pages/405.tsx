import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { useEffect } from "react";
import FaUserShield from "../icons/FaUserShield";



const er_500 = ({ }: any) => {

    const router = useRouter();

    return <motion.div className='w-screen h-screen flex flex-col items-center  justify-center bg-black text-white'>

        <motion.div initial={{ opacity: 0, }} transition={{ duration: 1, type: "spring" }} animate={{ opacity: 1, }} className='flex divide-x'>
            <motion.div className="px-5 font-semibold text-3xl h-14 flex items-center justify-center">
                <FaUserShield color="white" width="64" height="64" />

            </motion.div>

            <motion.div className="px-5 text-lg h-14 flex items-center justify-center">
                You should be admin to see this
            </motion.div>
        </motion.div>

        <motion.a href="/auth/login" className="m-7 p-2 border-b" initial={{ opacity: 0, }} transition={{ delay: 0.3, duration: 1, type: "spring" }} animate={{ opacity: 1, }} >

            Relogin

        </motion.a>



    </motion.div >
}

export default er_500;