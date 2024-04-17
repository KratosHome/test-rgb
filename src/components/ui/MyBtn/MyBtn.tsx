import {FC, ReactNode} from 'react';
import st from "./myBtn.module.scss"

interface myBtnProps {
    children: ReactNode;
}

const MyBtn: FC<myBtnProps> = ({children}) => {
    return (
        <button className={st.button}>
            {children}
        </button>
    );
};

export default MyBtn;