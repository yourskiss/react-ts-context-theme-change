import { useState } from "react";
import eyeRegular from "./../assets/images/eye-regular.svg";
import eyeSlash from "./../assets/images/eye-slash.svg";
import infoIcon from "./../assets/images/info-icon.svg";
import { Tooltip } from 'react-tooltip'

interface PropInfo {
    id: string,
    type: string,
    label?: string,
    placeholder?: string,
    maxLength:number,
    value: string | number,
    onChangeEvents?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    ErrorMsg?:string,
    passwordtype?:boolean
}

const BasePassword: React.FC<PropInfo> = ({ id, type, label, placeholder, maxLength, value, onChangeEvents, ErrorMsg, passwordtype  }) => {

const [showPassword, setShowPassword] = useState<boolean>(false);
const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
};

return (<>
<div className="relative flex flex-col w-full">
    <input 
        id={id}
        name={id}
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChangeEvents}
        className={`
              w-full px-4 pb-2 pt-5 rounded-lg border-2 bg-white placeholder-transparent  outline-0 text-black text-[16px] font-normal peer
              ${ErrorMsg  ? "border-red-primary focus:border-red-primary" : ""} 
              ${!ErrorMsg && !value ? "border-gray-primary focus:border-gray-primary" : ""}
              ${!ErrorMsg && value ? "border-blue-primary focus:border-blue-primary" : ""}
            `}
        />
    <label 
        htmlFor={id}
        className={`
            absolute px-0.5 text-[11px] text-gray-primary font-normal transition-all bg-white ease-swift left-4 top-1 peer-placeholder-shown:text-[14px] peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[11px]
        `}
    >
        {label}
    </label>
    { value && <button
        type="button"
        onClick={toggleVisibility}
        className="absolute top-1/2 -translate-y-1/2 right-7 z-20 px-3 py-1 cursor-pointer"
      >
        <img src={showPassword ?  eyeRegular : eyeSlash } alt="show hide password" className="w-4" />
    </button> }

    <div className="w-[20px] absolute top-1/2 right-2 -translate-y-1/2 z-20 ">
        { passwordtype && <>
            <img src={infoIcon} id={`${id}-click`} alt="show info" className="w-4 h-4 cursor-pointer" />
            <Tooltip anchorSelect={`#${id}-click`}>
                <p className="text-sm font-semibold text-white">
                    Password and Confirm Password should be the same.
                </p>
            </Tooltip>
        </> }
        { !passwordtype && <>
            <img src={infoIcon} id={`${id}-click`} alt="show info" className="w-4 h-4 cursor-pointer" />
            <Tooltip anchorSelect={`#${id}-click`}>
                <p className="text-sm font-semibold text-white mb-2">
                Your password must contain:
                </p>
                <ul className="list-disc list-inside text-sm font-normal text-gray-300 space-y-1">
                    <li>Minimum 8 characters</li>
                    <li>At least one uppercase letter (A-Z)</li>
                    <li>At least one lowercase letter (a-z)</li>
                    <li>At least one number (0-9)</li>
                    <li>At least one special character (!@#$%^&*)</li>
                </ul>
            </Tooltip> 
        </>}
    </div>

</div>
{ErrorMsg && <span className="pl-4 text-sm text-left text-red-primary mt-0 pb-1">{ErrorMsg}</span>}
</>)
}
export default BasePassword;