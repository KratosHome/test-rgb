"use client"
import st from "./rightPanel.module.scss"
import MyInput from "@/components/ui/MyInput/MyInput";
import MyBtn from "@/components/ui/MyBtn/MyBtn";
import Promotional from "@/components/main/Promotional/Promotional";
import {useForm} from "react-hook-form";
import {telegramAction} from "@/actions/telegram.server";

const RightPanel = () => {
    const {register, control, handleSubmit, formState: {errors, touchedFields}} = useForm();

    const onSubmit = async (data: any) => {
        await telegramAction(data);
    };

    return (
        <>
            <div className={st.container}>
                <span className={st.title}>Запишитесь <span>бесплатнои</span> получите подарок</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <MyInput
                        type={"text"}
                        placeholder="Ваше имя и фамилия"
                        name="name"
                        register={{
                            ...register('name', {
                                required: 'Це поле обовзякове',
                                minLength: {
                                    value: 4,
                                    message: 'Мінімальна кількість символів 4',
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'Максимальна кількість символів 50',
                                }
                            })
                        }}
                        error={errors.name}
                    />
                    <MyInput
                        type="phone"
                        placeholder="Ваш номер телефону"
                        name="phone"
                        control={control}
                        error={errors.phone}
                    />
                    <MyInput
                        type={"email"}
                        placeholder="Ваш email"
                        name="email"
                        register={{
                            ...register('email', {
                                required: 'Це поле обов\'язкове',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Неправильний формат email'
                                }
                            })
                        }}
                        error={errors.email}
                    />
                    <MyBtn>Записаться бесплатно</MyBtn>
                </form>
                <div className={st.agree}>
                    <span>Нажимая на кнопку я согашаюсь </span>
                    <span>с политикой конфидециальности</span>
                </div>
            </div>
            <div className={st.promotional}>
                <Promotional/>
            </div>
        </>
    );
};

export default RightPanel;