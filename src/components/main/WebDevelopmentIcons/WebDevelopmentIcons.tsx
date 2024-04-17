import st from "./webDevelopmentIcons.module.scss"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import substrate from "../../assets/substrate.png"
import vc from "../../assets/vs.png"
import Image from "next/image";
import Circle from "@/components/assets/Circle";

const WebDevelopmentIcons = () => {
    return (
        <div className={st.container}>
            <div className={st.img_html}>
                <Image src={html} alt={"html"} fill/>
                <Circle/>
            </div>
            <div className={st.img_css}>
                <Image src={css} alt={"css"} fill/>
                <Circle/>
            </div>
            <div className={st.img_js}>
                <Image src={js} alt={"js"} fill/>
                <Circle/>
            </div>
            <div className={st.img_substrate}>
                <Image src={substrate} alt={"substrate"} fill/>
                <Circle/>
            </div>
            <div className={st.img_vc}>
                <Image src={vc} alt={"vc"} fill/>
                <Circle/>
            </div>
        </div>
    );
};

export default WebDevelopmentIcons;