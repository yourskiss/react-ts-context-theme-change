// src/Context/ThemeSelector.tsx
import { useTheme } from "./ThemeContext";
import "./../assets/css/theme.css";

export default function ThemeSelector() {
  const { theme, changeTheme, AvailableThemes } = useTheme();

  return (<>
    <select name={theme} id="theme" onChange={(e)=>changeTheme(e.target.value as 'primary' | 'secondary' | 'tertiary')} className="w-auto bg-black float-end border-0 outline-0 text-white font-medium text-sm  p-2 rounded-sm mt-2 mr-3 ">
        {AvailableThemes.map((t) => (
            <option
                key={t}
                value={t}
                // disabled={t===theme}  
                 className={` ${ t === 'primary' ? 'bg-white text-black' : t === 'secondary' ? 'bg-[#1b3867] text-white' : 'bg-[#e43955] text-white'} `}
            >
                { t === 'primary' ? 'Light' : t === 'secondary' ? 'Dark' : 'Mix'}
                {/* { t.charAt(0).toUpperCase() + t.slice(1)} */}
            </option>
            ))}
    </select>
 
        {
        /*
        <aside className="flex gap-x-3 t_border bg-white p-5 hi">
            <button className="t_button text-white">Button</button>
            <span className="t_text">{theme}</span>
            {AvailableThemes.map((t) => (
            <button
                key={t}
                onClick={() => changeTheme(t)}
                className={` ${ t === 'primary' ? 'bg-blue-500' : t === 'secondary' ? 'bg-red-500' : 'bg-green-500'} `}
                
            >
                { t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
            ))}
        </aside>
        */
        }
  </>);
}