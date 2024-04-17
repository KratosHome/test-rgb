import st from "./leftPanel.module.scss"
import Earth from "@/components/assets/Earth";
import Promotional from "@/components/main/Promotional/Promotional";

const LeftPanel = () => {
    return (
        <div className={st.container}>
            <span className={st.webinar}><Earth/> Вебинар</span>
            <h1>front-end</h1>
            <div className={st.sub_title}>
                <span className={st.from_zero}>
                    <span className={st.from_zero_fff}>с нуля</span>
                </span>
                <span className={st.easy_start}>легкий старт в IT профессии</span>
            </div>
            <div className={st.desk}>
                Узнайте какими <span>навыками должен обладать фронтенд разработчик в 2022 году</span> и как начать
                карьеру в
                востребованной профессии
            </div>
            <div className={st.promotional}>
                <Promotional/>
            </div>
        </div>
    );
};

export default LeftPanel;