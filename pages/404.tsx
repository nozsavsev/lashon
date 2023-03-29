import { useRouter } from "next/router";
import { motion } from "framer-motion";



const er_404 = ({ }: any) => {

    const router = useRouter();

    return <motion.div className='w-screen h-screen flex flex-col items-center justify-center bg-black text-white'>

        <motion.div initial={{ opacity: 0, }} transition={{ duration: 1, type: "spring" }} animate={{ opacity: 1, }} className='flex divide-x'>
            <motion.div className="px-5 font-semibold text-3xl h-14 flex items-center justify-center">
                404
            </motion.div>

            <motion.div className="px-5 text-lg h-14 flex items-center justify-center">
                There is nothing here :(
            </motion.div>
        </motion.div>

        <motion.a href="/" className="m-7 p-2 border-b" initial={{ opacity: 0, }} transition={{ delay: 0.3, duration: 1, type: "spring" }} animate={{ opacity: 1, }} >
            Go home
        </motion.a>

    </motion.div>
}

export default er_404;