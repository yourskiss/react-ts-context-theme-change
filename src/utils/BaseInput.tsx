interface PropInfo {
    id: string,
    type: string,
    label?: string,
    placeholder?: string,
    maxLength:number,
    value: string | number,
    onChangeEvents?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    ErrorMsg?:string,
}

const BaseInput: React.FC<PropInfo> = ({ id, type, label, placeholder, maxLength, value, onChangeEvents, ErrorMsg }) => {
return (<>
<div className="relative flex flex-col w-full ">
  <input 
    id={id}
    name={id}
    type={type}
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
</div>
{ErrorMsg && <span className="pl-4 text-sm text-left text-red-primary mt-0 pb-1">{ErrorMsg}</span>}
</>)
}
export default BaseInput;