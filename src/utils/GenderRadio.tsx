interface PropInfo {
    value: string,
    genderChange?: (value: string) => void;
    ErrorMsg?:string,
}

const GenderRadio: React.FC<PropInfo> = ({ value, genderChange, ErrorMsg }) => {
 
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (genderChange) {
      genderChange(e.target.value);
    }
  };
return (<>
<p>Select Gender</p>
<div className="flex space-x-4">
    <label 
        htmlFor="gender-male" 
         className={`flex items-center cursor-pointer px-3 py-1 border rounded-[8px] ${ value === 'Male' ? 'bg-[#FFF1F3] text-[#E43955] border-[#E43955]' : 'border-gray-400' }`}
    >
            <input 
                id="gender-male"
                type="radio" 
                className="mr-2" 
                value="Male" 
                name="gender" 
                checked={value === 'Male'}
                onChange={handleChange}
            />
            <span>Male</span>
    </label>
    <label 
        htmlFor="gender-female" 
        className={`flex items-center cursor-pointer px-3 py-1 border rounded-[8px] ${ value === 'Female' ? 'bg-[#FFF1F3] text-[#E43955] border-[#E43955]' : 'border-gray-400' }`}
    >
            <input  
                id="gender-female" 
                type="radio"
                className="mr-2" 
                value="Female"  
                name="gender" 
                checked={value === 'Female'}
                onChange={handleChange}
            />
            <span>Female</span>
    </label>
    <label  
        htmlFor="gender-other" 
        className={`flex items-center cursor-pointer px-3 py-1 border rounded-[8px] ${ value === 'Other' ? 'bg-[#FFF1F3] text-[#E43955] border-[#E43955]' : 'border-gray-400' }`}
    >
            <input 
                id="gender-other" 
                type="radio" 
                className="mr-2" 
                value="Other" 
                name="gender" 
                checked={value === 'Other'}
                onChange={handleChange}
            />
            <span>Other</span>
    </label>
</div>
{ ErrorMsg && <span className="pl-4 text-sm text-left text-red-primary mt-0 pb-1">{ErrorMsg}</span>}
</>)
}
export default GenderRadio;