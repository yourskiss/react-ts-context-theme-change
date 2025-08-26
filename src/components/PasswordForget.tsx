 import { Link, useNavigate } from "react-router";
 import { useState } from "react";
 import { toast } from 'react-toastify';
 import { z } from 'zod';

import GoBackButton from "../utils/BackButton"
import BaseButton from "../utils/BaseButton"
import BaseInput from "../utils/BaseInput"

const ForgetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<boolean>(false);

const formSchema = z.object({
    email: z.string()
      .min(1, 'Email is required')
      .email('Invalid email format')
      .max(50, 'Max 50 characters'),
    }) 
  type FormData = z.infer<typeof formSchema>;
  const [formData, setFormData] = useState<FormData>({ 
     email: '',
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
            toast.success("Password Reset link Successfully Send");
            navigate('/login');
    },2000);
      
  };

  return (<>
  <div className="w-full flex justify-center items-center">
      <GoBackButton />
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto grid gap-y-5">
        <h1 
            className="mb-5 w-full text-center text-[24px] font-semibold text-blue-primary">
            Forget Password
            <span
              className="mt-3 block  text-[16px] font-normal text-black">
                Enter your email to reset It!
            </span>
        </h1>
         <BaseInput
          id="email"
          type="text"
          label="Email ID"
          placeholder="Email ID"
          maxLength={50}
          value={formData.email}
          onChangeEvents={handleChange}
          ErrorMsg={ errors.email || ''}
        />
        <BaseButton state={status}  text="Reset Password" />
        <p 
          className="mb-5 w-full flex justify-between text-[14px] font-normal text-blue-primary">
            <Link to="/login" className="ml-2 text-red-primary underline hover:text-black">
              Back to Login
            </Link>
            <Link to="/reset-password" className="ml-2 text-red-primary underline hover:text-black">
              Reset Password
            </Link>
        </p>
      </form>
      
    </div>
  </>);
};
export default ForgetPassword;