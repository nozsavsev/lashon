import { motion } from "framer-motion";

const Transitional_ZoomIn = (props) => {

    return <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{
            opacity: props.StartTransition ? 1 : 0,
                        scale: props.StartTransition ? 1 : 0.1,
        }}
        transition={{ duration: props.instant ? 0 : 0.5, delay: props.instant ? 0 : props.delay ? props.delay : 0.2 }}
        {...props}
    >
        {props.children}
    </motion.div>
}

export default Transitional_ZoomIn;