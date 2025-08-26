import {  State } from 'country-state-city';
import "./../assets/css/dropdown.css"
interface PropInfo {
    id: string,
    label?: string,
    selectedCountry: string,
    selectedState: string,
    changeState : (e: React.ChangeEvent<HTMLSelectElement>) => void,
    ErrorMsg?:string,
}
const StateDD: React.FC<PropInfo> = ({ id, label, selectedCountry, selectedState, changeState,   ErrorMsg }) => {  
 
  const statesList =   State.getStatesOfCountry('IN');

return (<>
<div className="relative flex flex-col w-full ">
    <select
        className={`
              dropdowninput w-full px-4 rounded-lg border-2 bg-white placeholder-transparent  outline-0 text-[16px] font-normal peer
              ${ErrorMsg  ? "text-gray-primary border-red-primary focus:border-red-primary  py-3.5" : ""} 
              ${!ErrorMsg && !selectedState ? "text-gray-primary border-gray-primary focus:border-gray-primary py-3.5" : ""}
              ${!ErrorMsg && selectedState ? "text-blue-primary border-blue-primary focus:border-blue-primary pb-2 pt-5" : ""}
            `}
          value={selectedState}
          id={id}
          name={id}
          onChange={changeState}
          disabled={!selectedCountry}
        >
          <option value="" data-name="">Select State</option>
          {statesList.map((state) => (
            <option key={state.isoCode} value={ state.isoCode } data-name={state.name} style={{'color':'#000000'}}>
              {state.name}
            </option>
          ))}
        </select>
 { selectedState && <label 
    htmlFor={id}
    className={`
            absolute px-0.5 text-[11px] text-gray-primary font-normal transition-all bg-white ease-swift left-4 top-1 peer-placeholder-shown:text-[14px] peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:text-[11px]
        `}
    >
      {label}
  </label> }  
</div>
{ErrorMsg && <span className="pl-4 text-sm text-left text-red-primary mt-0 pb-1">{ErrorMsg}</span>}
</>)
}
export default StateDD;