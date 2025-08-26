import { useNavigate } from "react-router";
import { useState } from "react";
import OtpInput from 'react-otp-input';
import { z } from 'zod';

import LoginButton from "../parts/login/LoginButton";

import GoBackButton from "../utils/BackButton";
import BaseButton from "../utils/BaseButton";
import BaseInput from "../utils/BaseInput";
import BasePassword from "../utils/BasePassword";

import otpicon from "./../assets/images/registation/otp.svg";
import googleicon  from "./../assets/images/icons/google.svg";

const Login: React.FC = () => {
  const navigate = useNavigate();
 
  // otp field value
  const [otp, setOtp] = useState<string>('');
 
  // change stage ==== login/otp form
  const[stage, setStage] = useState<number>(1);
  const stageChange = (val:number) : void => {
    setStage(val);
  }
  // change login type ==== login by emaild or phone
  const[typ, setTyp] = useState<'email' | 'mobile'>('email');
  const loginChange = (tab: 'email' | 'mobile') : void => {
    setTyp(tab)
  }
  // mobile number input
  const [mobile, setMobile] = useState<number | string>('');
  const handleChangeMobile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: number | string = e.target.value;
    if (/^\d*$/.test(input)) {
      setMobile(input);
    }
  };
  // ✅ Define Zod schema
  const formSchema = z.object({
    emailid: z.string().email('Invalid email format').max(50, 'Max 50 characters'),
    password: z.string()
      .min(8, 'Minimum 8 characters')
      .regex(/[a-z]/, 'At least one lowercase letter')
      .regex(/[A-Z]/, 'At least one uppercase letter')
      .regex(/\d/, 'At least one number')
      .regex(/[!@#$%^&*]/, 'At least one special character'),
  });
  type FormData = z.infer<typeof formSchema>;
  const [formData, setFormData] = useState<FormData>({
      emailid: '',
      password: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    console.log('✅ Submitted:', result.data);
    navigate('/Dashboard')
  };
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
    { typ === 'email' ? <>
    <section className="w-full">
      <form onSubmit={handleSubmit}  className="grid space-y-4 gap-y-2">
        <BaseInput 
          id="emailid"
          type="text"
          label="Email ID"
          placeholder="Email"
          maxLength={50}
          value={formData.emailid}
          onChangeEvents={handleChange}
          ErrorMsg={errors.emailid || ''}
        /> 
        <BasePassword 
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          maxLength={50}
          value={formData.password}
          onChangeEvents={handleChange}
          ErrorMsg={errors.password || ''}
        /> 
        <button
                type="button"
                onClick={()=> navigate('/Forgetpassword')}
                className="
                  cursor-pointer
                  py-1
                  align-middle
                  text-red-primary
                  focus-visible:ring-red-primary
                  focus-visible:ring-2
                  focus-visible:outline-none
                  hover:text-blue-primary
                  w-full
                  px-1
                  text-right
                  block
                  text-[14px]
                  font-normal
                  bg-white
                  rounded-none
                  font-roboto">
                Forgot Password?
          </button>
          <BaseButton state={false}  text="Login" />
      </form>
    </section>
    </> : <>
    <section className="w-full">  
      <form className="grid space-y-5 gap-y-2">
        <BaseInput 
          id="mobileinput"
          type="text"
          label="Mobile Number"
          placeholder="Mobile"
          maxLength={10}
          value={mobile}
          onChangeEvents={handleChangeMobile}
          ErrorMsg={""}
        />
        <BaseButton state={false}  text="Continue" clickwithargument={() => stageChange(2)} />
      </form>
    </section>
    </>
    } 

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
</> : <>
   <GoBackButton 
      statechange={true} 
     /* onClickBack={(e: React.MouseEvent<HTMLButtonElement>) => console.log("Button clicked:", e.currentTarget)} */
      onClickBack={() => stageChange(1) }
  />
  <div className="px-6 py-10 mx-auto lg:px-2 lg:py-12 lg:max-w-sm">
    <div className="flex flex-col mt-4 space-y-4 lg:mt-1 lg:space-y-7">
     
      <h1 
        className="w-full text-center text-[24px] font-semibold text-blue-primary">
          OTP Verification
          <span
            className="mt-1 block text-[18px] font-normal text-black">
            9912211223
          </span>
      </h1>
      <aside className="w-full text-center">
        <img src={otpicon} alt="otp" className="w-[90px] mx-auto" />
      </aside>
      <p
        className="w-full text-center text-[14px] font-normal text-black">
          Enter the 6-digit OTP code that has been sent 
          <br />
          from SMS to complete your account registration
      </p>
      <div className="mt-4 mb-2 relative w-full flex- justify-center items-center otp-inputs">
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
      </div>
      <div className="text-[14px] font-normal cursor-pointer text-center p-3">
          <span className="text-black">Expire in <b className="text-red-primary">10</b> sec</span>  
          <span className="text-red-primary underline hover:text-blue-primary">Send OTP again</span>
      </div>
      <BaseButton state={false}  text="Submit"  />
    </div>
  </div>
</>}

</>);
};
export default Login;