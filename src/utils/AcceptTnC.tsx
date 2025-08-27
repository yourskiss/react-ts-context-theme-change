import { Link } from "react-router";

interface PropInfo {
    checked: boolean;
    handleCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ErrorMsg?: string;
}

const AcceptTnC: React.FC<PropInfo> = ({ checked,  handleCheckboxChange, ErrorMsg }) => {
 
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (handleCheckboxChange) handleCheckboxChange(event);
  };
return (<>
<div className="flex space-x-6">
    <label 
        htmlFor="acceptterms" 
        className="w-auto flex items-center justify-items-start flex-wrap gap-x-1 cursor-pointer font-light text-sm"
    >
            <input 
                id="acceptterms"
                name="acceptterms"
                value="acceptterms"
                type="checkbox" 
                className={`p-4 border rounded-[3px] ${ checked ? 'bg-[#FFF1F3]  border-[#E43955]' : 'bg-white border-gray-400' }`}
                checked={checked}
                onChange={handleChange}
            />
            <span>Please Accept</span> 
            <Link to="/" className="text-red-primary">Term and Condition</Link> 
            <span>and</span> 
            <Link to="/" className="text-red-primary">Privacy Policy</Link> 
    </label>
    
     
</div>
{ ErrorMsg && <span className="pl-4 text-sm text-left text-red-primary mt-0 pb-1">{ErrorMsg}</span>}
</>)
}
export default AcceptTnC;