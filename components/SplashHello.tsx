import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashHello = (props: { onSplashExitStart: () => void, disabled?: boolean, instant?: boolean, autostart?: boolean }) => {

    const [clicked, setClicked] = useState(false);
    const [initialEnded, setInitialEnded] = useState(false);
    const [secondEnded, setSecondEnded] = useState(false);

    useEffect(() => {

        if (props.disabled)
            if (props.onSplashExitStart)
                props.onSplashExitStart()

        if (props.autostart) {
            setInterval(() => {
                setInitialEnded(true)
                setClicked(true)
            }, 500);
        }

    }, [])

    if (!secondEnded && !props.disabled)
        return <motion.div className='w-screen h-screen flex items-center justify-center text-white select-none fixed top-0 left-0'
            onClick={() => { if (!clicked) setClicked(true); }}
            animate={{ opacity: 1 }}
            transition={{ duration: props.instant ? 0 : initialEnded ? 0.5 : 0.3, }}>

            <motion.div
                initial={{ opacity: 0.1, y: 0 }}
                animate={{
                    opacity: clicked ? 0 : 1,
                    y: 0,
                    scale: clicked ? 30 : 1,
                }}
                transition={{ duration: props.instant ? 0 : initialEnded ? 0.5 : 0.3, }}
                className="font-thin cursor-pointer"
                style={{ fontSize: '15vw' }}
                onAnimationStart={() => {
                    if (initialEnded)
                        if (props.onSplashExitStart)
                            props.onSplashExitStart()
                }}

                onAnimationComplete={() => initialEnded ? setSecondEnded(true) : setInitialEnded(true)}>
               
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="flex flex-col justify-start items-start my-16">
                    <motion.div className="text-neutral-500 text-2xl md:text-4xl">
                        Powered by
                    </motion.div>
                    <motion.div className="text-5xl md:text-8xl">
                        Ilia Nozdrachev
                    </motion.div>
                </motion.div>

            </motion.div>

        </motion.div >
}

export default SplashHello;