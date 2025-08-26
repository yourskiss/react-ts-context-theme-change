 
import { useState } from "react";
 
import GoBackButton from "../utils/BackButton";

import LoginByEP from "./../parts/login/LoginByEP";
import LoginByMobile from "./../parts/login/LoginMobile";
import LoginOTP from "./../parts/login/LoginOTP";
import LoginButton from "../parts/login/LoginButton";


import googleicon  from "./../assets/images/icons/google.svg";

const Login: React.FC = () => {
 
  // start ======> change login/otp form
  const[stage, setStage] = useState<number>(1);
  const stageChange = (val:number) : void => {
    setStage(val);
  }
  // end ======> change login/otp form

  // start ======> change login by emaild or phone
  const[typ, setTyp] = useState<'email' | 'mobile'>('email');
  const loginChange = (tab: 'email' | 'mobile') : void => {
    setTyp(tab)
  }
  // end ======> change login by emaild or phone

  // start ======> phonevalue
  const[phonevalue, setPhonevalue] = useState<string>('');
  const phoneChange = (val:string) : void => {
    setPhonevalue(val)
  }
  // end ======> phonevalue


  return (<>
  {
    stage === 1 ? <>
  <GoBackButton  />
  <div className=" relative w-full max-w-sm mx-auto">
    <section className="w-full mb-7">
          <h1 
            className="w-full text-center font-roboto text-[24px] font-semibold text-blue-primary">
              Sign in
          </h1>
          <p
            className="mt-2 w-full text-center font-roboto text-[18px] font-normal text-black">
              Welcome Back!
          </p>
          <ul className="mt-10 w-full list-none inline-flex gap-6 text-gray-dark text-[18px] font-bold">
            <li 
              onClick={() => loginChange('email')} className={`w-auto cursor-pointer pb-2 transition-all duration-200 ${ typ === 'email' ? 'text-red-primary border-b-3 border-red-primary' : '' }`}>
                Email
            </li>
            <li 
              onClick={() => loginChange('mobile')}  className={`w-auto cursor-pointer pb-2 transition-all duration-200 ${ typ === 'mobile' ? 'text-red-primary border-b-3 border-red-primary' : '' }`}>
                Phone Number
            </li> 
          </ul>
    </section>
    { typ === 'email' ?  <LoginByEP /> :  <LoginByMobile phonevalue={phonevalue} phoneChange={(val:string) => phoneChange(val) } changeStage={() => stageChange(2) } />   } 

    <section className="w-full py-4">
      <div  className="flex items-center justify-center px-2 my-6">
        <div className="w-full mx-3 mb-1 border border-b-1"></div>
        <div className="font-semibold text-tiny text-secondary-brown">Or</div>
        <div className="w-full mx-3 mb-1 border border-b-1"></div>
      </div>
      <button 
        className="mt-5 p-4 rounded-lg w-full flex justify-center items-center space-x-2.5" style={{'boxShadow': 'rgba(0, 0, 0, 0.1) 0px -2px 3px 0px, rgba(0, 0, 0, 0.2) 0px 2px 3px 0px'}}>
          <img
            src={googleicon} 
            alt="Google"
            className="w-6 h-6"
          />
          <span className="text-black">Login with Google</span>
      </button>
      <div className="mt-8 w-full">
            <p className="w-full text-center font-roboto text-[16px] font-normal text-secondary-dark-brown">
              Create an account
            </p>
            <p className="mt-4 w-full flex justify-center items-center gap-5 font-roboto text-[14px] font-normal">
              <LoginButton path="/student-registation" lable="Student" />
              <LoginButton path="/expert-registation" lable="Expert" />
              <LoginButton path="/institution-registation" lable="Institution" />
            </p>
      </div>
    </section>
</div>
</> :  <>
  <GoBackButton 
        statechange={true} 
      /* onClickBack={(e: React.MouseEvent<HTMLButtonElement>) => console.log("Button clicked:", e.currentTarget)} */
        onClickBack={() => stageChange(1) }
    />
  <LoginOTP phonevalue={phonevalue} changeStage={() => stageChange(1) } /> 
</>
}

</>);
};
export default Login;