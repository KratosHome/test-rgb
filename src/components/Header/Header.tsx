import st from "./header.module.scss";
import Calendar from "@/components/assets/Calendar";
import Time from "@/components/assets/time";
import Image from "next/image";

const Header = () => {

    const currentDate = new Date();

    const formattedDate = currentDate.toLocaleDateString('uk-UA', {
        day: 'numeric',
        month: 'long'
    });


    return (
        <header className={st.container}>
            <div className={st.logo}>
                <Image src={"/logo.png"} alt={"logo"} fill={true}/>
            </div>
            <div className={st.wrapper_info}>
                <div className={st.info}>
                    <Calendar/> {formattedDate}
                </div>
                <div className={st.info}>
                    <Time/> 3,5 часа
                </div>
            </div>
        </header>
    );
};

export default Header;