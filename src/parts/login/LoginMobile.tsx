import { useState } from "react";

import { toast } from 'react-toastify';

import BaseButton from "../../utils/BaseButton";
import BaseInput from "../../utils/BaseInput";


interface PropInfo {
    phonevalue: string,
    phoneChange: (val: string) => void,
    changeStage?: () => void
}

const LoginByMobile : React.FC<PropInfo>  =  ({ phonevalue, phoneChange, changeStage }) => {
  const [status, setStatus] = useState<boolean>(false);
   const [mobile, setMobile] = useState<string>(phonevalue);
   const [merr, setMerr] = useState<string>('');
   const handleChangeMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
     const input: string = e.target.value;
     if (/^\d*$/.test(input)) {
       setMobile(input);
       setMerr(''); 
     }
   };
  
 const handleSubmitMobile = (e: React.FormEvent) => {
   e.preventDefault();
   if (mobile.trim() === '') {
     setMerr('Mobile number is required.');
     return;
   }
   if (mobile.length !== 10) {
     setMerr('Mobile Number must be 10 Digits');
     return;
   }
   if (!/^[6-9]/.test(mobile)) {
     setMerr('Mobile number must start with 6, 7, 8, or 9.');
     return;
   }


    setStatus(true);
    setTimeout(()=>{
      setStatus(false);
            console.log('Mobile valid:', mobile);
            toast.success("OTP Genrated Successfully");
            phoneChange(mobile);
            if (changeStage) changeStage();
    },1000);

    
 };
 
 

  return (
    <section className="w-full">  
      <form onSubmit={handleSubmitMobile} className="grid space-y-5 gap-y-2">
        <BaseInput 
          id="mobileinput"
          type="text"
          label="Mobile Number"
          placeholder="Mobile"
          maxLength={10}
          value={mobile}
          onChangeEvents={handleChangeMobile}
          ErrorMsg={merr || ""}
        />
        <BaseButton state={status}  text="Continue" />
      </form>
    </section>
  );
};

export default LoginByMobile;
