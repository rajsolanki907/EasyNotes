import React, { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const PassswordInput = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] =useState(false);
    
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };
  return (
    <div className=" flex items-center b-transparent border-[1.5px] px-5 rounded mb-3">
        <input 
        value = {value}
        onChnange = {onChange}
        type = {isShowPassword ? "text" : "password"}
        placeholder = {placeholder || "Password"}
        className= "w-full text-sm bg-tranparent py-3 mr-3 rounded outline-none"
        />

        {isShowPassword ? (<FaRegEye 
           size = {22}
           className="text-primary cursor-pointer"
           onClick={() => toggleShowPassword()}
        /> 
        ) : (
        <FaRegEyeSlash
                size= {22}
                ClassName="text-slate-400 cursor-pointer"
                onClick = {() => toggleShowPassword()}
        />
        )}
    </div>
  )
}

export default PassswordInput
