import { motion } from "framer-motion";
import { useRouter } from "next/router";

const AboutWidget = (props) => {

    const router = useRouter();

    return <motion.a
        href="/about"
        initial={{ y:200 }}
        animate={{ y: 0 }}
        className={`fixed h-8 w-8 p-5 m-4 sm:m-8 z-50 flex items-center justify-center 
                    border-2  ${props.light ? "border-black" : "border-white"} ${props.light ? "text-black" : "text-white"} backdrop-blur-lg  
                    select-none cursor-pointer 
                    font-semibold text-2xl rounded-full bottom-0 right-0`}>
        i
    </motion.a>
}

export default AboutWidget;