 import { useNavigate } from "react-router";
 import { useEffect, useState } from "react";
 import { toast } from 'react-toastify';
 import { z } from 'zod';

import BaseButton from "../utils/BaseButton"
import BasePassword from "../utils/BasePassword";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<boolean>(false);

  const checkID : boolean = true;
  useEffect(() =>{
    if(!checkID) {
        toast.success("Access is expire, Please reset again.");
        navigate('/forget-password');
    }
  });

const formSchema = z.object({
    password: z.string()
      .min(6, 'Minimum 6 characters')
      .max(12, 'Max 12 characters')
      .regex(/[a-z]/, 'At least one lowercase letter')
      .regex(/[A-Z]/, 'At least one uppercase letter')
      .regex(/\d/, 'At least one number')
      .regex(/[!@#$%^&*]/, 'At least one special character (!@#$%^&*)'),
    confirmpassword: z.string()
      .min(6, 'Minimum 6 characters')
      .max(12, 'Max 12 characters')
  }).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });
  type FormData = z.infer<typeof formSchema>;
  const [formData, setFormData] = useState<FormData>({ 
     password: '',
     confirmpassword:''
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
 
        setStatus(true);
        setTimeout(()=>{
          setStatus(false);
                 console.log('Form Submited - ', formData);
                toast.success("Password Successfully Changed");
                navigate('/login');
        },2000);

        
  };
 

  return (<>
  <div className="w-full flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto grid gap-y-5">
        <h1 
            className="mb-5 w-full text-center text-[24px] font-semibold text-blue-primary">
            Reset Password
            <span
              className="mt-3 block  text-[16px] font-normal text-black">
                Enter your New Password
            </span>
        </h1>

        <div className="w-full flex flex-col space-x-0 lg:space-x-4 space-y-4">
            <BasePassword 
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              maxLength={12} 
              value={formData.password}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.password || ''}
            />  
            <BasePassword
              id="confirmpassword"
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              maxLength={12} 
              value={formData.confirmpassword}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.confirmpassword || ''}
              passwordtype={true}
            /> 
        </div>
 
        <BaseButton state={status}  text="Reset Password" />
      </form>
    </div>
  </>);
};
export default ResetPassword;