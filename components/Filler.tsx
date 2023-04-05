const Filler = (props: { children: JSX.Element, left: boolean }) => {

    return <div className="w-screen h-fit flex items-center overflow-hidden">

        <div className={`w-screen shrink-0 h-fit ${(props.left ? "spinner_left" : "spinner_right")}`} >
            {props.children}
        </div>

        <div className={`w-screen shrink-0 h-fit ${(props.left ? "spinner_left" : "spinner_right")} `}>
            {props.children}
        </div>

    </div>
}
export default Filler;