import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import OtpInput from 'react-otp-input';
import { useTimer } from 'use-timer';
import { useNavigate } from "react-router";

import otpicon from "./../../assets/images/registation/otp.svg";
import editicons from "./../../assets/images/edit-icon.svg";

import BaseButton from "../../utils/BaseButton";

interface PropInfo {
    phonevalue: string,
    changeStage?: () => void
}

const LoginOTP : React.FC<PropInfo>  =  ({ phonevalue, changeStage }) => {
    const [status, setStatus] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>('');
    const { time, start } = useTimer({
        initialTime: 15,
        timerType: 'DECREMENTAL',
        endTime: 0,
    });
    useEffect(() => {
       // reset();
        start();
    }, [start]);

    const navigate = useNavigate();
    const handleSubmitOTP = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp.trim() === '') {
            toast.info('OTP is required.');
            return;
        }
        if (otp.length !== 6) {
            toast.info('OTP must be 6 Digits');
            return;
        }


        setStatus(true);
        setTimeout(()=>{
          setStatus(false);
                console.log('OTP valid:', otp);
                toast.success("OTP Successfully Validated");
                navigate('/dashboard');
        },1000);

        
    };

  
  return (<>
  <div className="px-6 py-10 mx-auto lg:px-2 lg:py-12 lg:max-w-sm">
    <div className="flex flex-col mt-4 space-y-4 lg:mt-1 lg:space-y-7">
      <h1 className="w-full text-center text-[24px] font-semibold text-blue-primary">
            OTP Verification
      </h1>
      <p className="w-full mt-1 pb-2 flex justify-center items-center">
            <span className="text-[18px] font-normal text-black">
                {phonevalue}
            </span>
            <img 
                onClick={changeStage} 
                src={editicons} 
                alt="change" 
                className="w-4 ml-4 -mt-1 cursor-pointer" 
                title="Change Mobile Number" 
            />
      </p>
      <aside className="w-full text-center">
        <img src={otpicon} alt="otp" className="w-[90px] mx-auto" />
      </aside>
      <p
        className="w-full text-center text-[14px] font-normal text-black">
          Enter the 6-digit OTP code that has been sent 
          <br />
          from SMS to complete your account registration
      </p>
      <form onSubmit={handleSubmitOTP} className="grid space-y-5 gap-y-2 mt-4 mb-2 relative w-full ">
        <OtpInput
          value={otp}
          onChange={(val) => {
            const numericOnly = val.replace(/\D/g, ''); 
            setOtp(numericOnly);
          }}
          numInputs={6}
          renderSeparator={<span></span>}
          inputStyle={{
            width: '3rem',
            height: '3rem',
            margin: '0 0.5rem',
            fontSize: '1.2rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            textAlign: 'center',
          }}
          renderInput={(props) => <input {...props} inputMode="numeric" pattern="[0-9]*" />}
        />
        <BaseButton state={status}  text="Submit"  />
      </form>
      <div className="text-[14px] font-normal cursor-pointer text-center p-3">
        {
            time === 0 ? <>
                <span className="text-red-primary underline hover:text-blue-primary" onClick={start}>Send OTP again</span>
            </> : <>
                <span className="text-black">Expire in <b className="text-red-primary">{time}</b> sec</span>  
            </>
        }
      </div>
      
    </div>
  </div>
  </>); 
 
};

export default LoginOTP;
