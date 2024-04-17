import st from "./promotional.module.scss"
import Image from "next/image";
import employer from "@/components/assets/employee.png";
import present from "@/components/assets/present.png";

const Promotional = () => {
    return (
        <div className={st.container}>
            <div className={`${st.card} ${st.employer}`}>
                <div className={st.img}>
                    <Image src={employer} alt={"employer"} fill={true}/>
                </div>
                <div>
                    <span>Кирилл <span>КАСАТОНОВ</span></span>
                    <span>6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями</span>
                </div>
            </div>
            <div className={`${st.card} ${st.present}`}>
                <div className={st.img}>
                    <Image src={present} alt={"employer"} fill={true}/>
                </div>
                <div>
                    <span>Бонус за регистрацию</span>
                    <span>PDF-файл "5 преимуществ профессии фронтенд разработчика"</span>
                </div>
            </div>
        </div>
    );
};

export default Promotional;