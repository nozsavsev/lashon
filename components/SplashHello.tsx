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
        return <motion.div className='w-screen h-screen flex items-center justify-center text-white select-none absolute top-0 left-0'
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
                dir="rtl"
                style={{ fontSize: '15vw' }}
                onAnimationStart={() => {
                    if (initialEnded)
                        if (props.onSplashExitStart)
                            props.onSplashExitStart()
                }}
                onAnimationComplete={() => initialEnded ? setSecondEnded(true) : setInitialEnded(true)}>

                שלום!

            </motion.div>

        </motion.div >
}

export default SplashHello;