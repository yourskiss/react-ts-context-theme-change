import { useNavigate } from "react-router";
 import { useState } from "react";
 import { toast } from 'react-toastify';
import { z } from 'zod';

import BaseButton from "../utils/BaseButton";
import BaseInput from "../utils/BaseInput";
import BasePassword from "../utils/BasePassword";
import GoBackButton from "../utils/BackButton";
import GenderRadio from "../utils/GenderRadio";
import DobInput from "../utils/DobInput";

 
const RegisterStudent: React.FC = () => {
 const navigate = useNavigate();
 const [status, setStatus] = useState<boolean>(false);
 
const formSchema = z.object({
    fullname: z.string()
      .min(1, 'Full name is required')
      .max(50, 'Max 50 characters'),
    email: z.string()
      .min(1, 'Email is required')
      .email('Invalid email format')
      .max(50, 'Max 50 characters'),
    phone: z.string()
      .min(10, 'Phone number must be 10 digits')
      .max(10, 'Phone number must be 10 digits')
      .regex(/^[6-9]\d{9}$/, 'Phone must start with 6, 7, 8, or 9 and be 10 digits'),
    dob: z.string()
      .min(1, 'Date of Birth is required'),
    password: z.string()
      .min(6, 'Minimum 6 characters')
      .max(12, 'Max 50 characters')
      .regex(/[a-z]/, 'At least one lowercase letter')
      .regex(/[A-Z]/, 'At least one uppercase letter')
      .regex(/\d/, 'At least one number')
      .regex(/[!@#$%^&*]/, 'At least one special character (!@#$%^&*)'),
    confirmpassword: z.string()
      .min(1, 'Confirm password is required'),
    state: z.string()
      .min(1, 'State is required'),
    city: z.string()
      .min(1, 'City is required'),
    gender: z.string()
      .min(1, 'Gender is required'),
  }).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });
  type FormData = z.infer<typeof formSchema>;

  const [formData, setFormData] = useState<FormData>({ 
     fullname:'',
     email: '', 
     phone: '',
     dob: '',
     password: '',
     confirmpassword:'',
     state: '', 
     city: '',
     gender: ''
   });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone' && !/^\d*$/.test(value)) return;  
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };
  const genderChange = (tab: string) : void => {
    setFormData((prev) => ({ ...prev, gender : tab }));
    setErrors((prev) => ({ ...prev, gender : '' })); 
  }
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
                console.log('Form Submited - ', result.data);
                toast.success("Form Submited Successfully");
                navigate('/Thanks')
        },1000);

        
  };
 
  return (<>
  <GoBackButton />
  <div className=" relative w-5/6 mx-auto">
      <section className="w-full mb-7">
          <h1 
            className="w-full text-center font-roboto text-[24px] font-semibold text-blue-primary">
              Student Registration - zod
          </h1>
          <p
            className="mt-2 w-full text-center font-roboto text-[18px] font-normal text-black">
              Personal Information
          </p>
      </section>
      <form onSubmit={handleSubmit} className="w-full flex flex-col  space-y-4">
        <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4">
          <div className="w-full lg:w-1/2 ">
            <BaseInput 
              id="fullname"
              type="text"
              label="Full Name"
              placeholder="Full Name"
              maxLength={50} 
              value={formData.fullname}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.fullname || ''}
            /> 
          </div>
          <div className="w-full lg:w-1/2">
            <BaseInput 
              id="email"
              type="text"
              label="Email ID"
              placeholder="Email"
              maxLength={50} 
              value={formData.email}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.email || ''}
            />  
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4">
          <div className="w-full lg:w-1/2">
            <BaseInput 
              id="phone"
              type="text"
              label="Phone Number"
              placeholder="Phone Number"
              maxLength={10} 
              value={formData.phone}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.phone || ''}
            /> 
          </div>
          <div className="w-full lg:w-1/2">
            <DobInput
              id="dob"
              type="date"
              label="Date of Birth"
              placeholder="Date of Birth"
              maxLength={10} 
              value={formData.dob}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.dob || ''}
              maxdate={true}
              mindate={true}
            /> 
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4">
          <div className="w-full lg:w-1/2">
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
          </div>
          <div className="w-full lg:w-1/2">
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
        </div>
        <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4">
          <div className="w-full lg:w-1/2">
            <BaseInput  
              id="state"
              type="text"
              label="State"
              placeholder="State"
              maxLength={50} 
              value={formData.state}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.state || ''}
            /> 
          </div>
          <div className="w-full lg:w-1/2">
            <BaseInput 
              id="city"
              type="text"
              label="City"
              placeholder="City"
              maxLength={10} 
              value={formData.city}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.city || ''}
            /> 
          </div>
        </div>
        <div className="w-full flex flex-col  space-x-0 lg:space-x-4 space-y-4">
            <GenderRadio 
              value={formData.gender}
              genderChange={genderChange}
              ErrorMsg={ errors.gender || ''}
            />
        </div>
        <div className="w-full flex justify-center space-x-0 lg:space-x-4 space-y-4">
          <aside className="w-[200px]">
              <BaseButton state={status}  text="Next" />
          </aside>
        </div>
      </form>
  </div>
</>);
};
export default RegisterStudent;