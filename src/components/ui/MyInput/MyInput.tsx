"use client"
import {FC} from 'react';
import st from "./myInput.module.scss"
import {Control, Controller, FieldError, useForm, useFormContext} from "react-hook-form";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface MyInputProps {
    type: 'text' | 'password' | 'email' | 'phone';
    name: string
    placeholder: string;
    register?:any;
    error?: string | FieldError | any;
    control?: Control<any>;
}

const MyInput: FC<MyInputProps> = ({type, placeholder, name, control, error, register}) => {

    const phoneInputStyles = {
        inputStyle: {
            backgroundColor: '#272D3D',
            width: '248px',
            height: '51px',
            borderRadius: '5px',
            border: 'none',
            paddingLeft: '52px',
            color: '#ffffff',
            outline: 'none',
        },
        buttonStyle: {
            backgroundColor: '#272D3D',
            color: '#ffffff',
        },
        dropdownStyle: {
            backgroundColor: '#272D3D',
            width: '248px',
        }
    };

    return (
        <div className={st.container}>
            {type === "phone" ? (
                <Controller
                    control={control}
                    name={name}
                    rules={{
                        required: "Це поле обов'язкове",
                        minLength: {
                            value: 10,
                            message: "Номер телефону повинен містити щонайменше 10 цифр"
                        },
                        maxLength: {
                            value: 14,
                            message: "Номер телефону повинен містити не більше 14 цифр"
                        }
                    }}
                    render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                        <PhoneInput
                            country={'ua'}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            inputStyle={phoneInputStyles.inputStyle}
                            buttonStyle={phoneInputStyles.buttonStyle}
                            dropdownStyle={phoneInputStyles.dropdownStyle}
                            inputProps={{
                                ref: ref,
                                name: name,
                                placeholder: placeholder,
                            }}
                        />
                    )}
                />

            ) : (
                <input
                    className={st.input}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    {...register}
                />
            )}
            {error && error.message && <div className={st.error}>{error.message}</div>}
        </div>
    );
};

export default MyInput;
