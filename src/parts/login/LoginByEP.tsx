 import { useNavigate } from "react-router";
 import { useState } from "react";
 import { toast } from 'react-toastify';

 
import BaseButton from "../../utils/BaseButton";
import BaseInput from "../../utils/BaseInput";
import BasePassword from "../../utils/BasePassword";


  interface epDataType {
     emailid: string, 
     password: string
  }
  interface epErrorType {
     emailid?: string, 
     password?: string
  }

const LoginByEP : React.FC  =  ( ) => {
   const navigate = useNavigate();
  const [status, setStatus] = useState<boolean>(false);
  const [formData, setFormData] = useState<epDataType>({ emailid: '', password: '' });
  const [errors, setErrors] = useState<epErrorType>({});
  
  const handleChangeEP = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };


  const validateEP = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const newErrors: typeof errors = {};
    if (!formData.emailid) {
      newErrors.emailid = 'Email is required.';
    } else if (!emailRegex.test(formData.emailid)) {
      newErrors.emailid = 'Please enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = 'Password must include at least one uppercase letter.';
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = 'Password must include at least one lowercase letter.';
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = 'Password must include at least one number.';
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password = 'Password must include at least one special character (!@#$%^&*).';
    }
    return newErrors;
  };



  const handleSubmitEP = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateEP();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      

        setStatus(true);
        setTimeout(()=>{
          setStatus(false);
                console.log('Form Submited - ', formData.emailid, ' - ', formData.password);
                toast.success("Form Submited Successfully");
                navigate('/dashboard')
        },1000);


    }
  };

  return (<> 
    <section className="w-full">
      <form onSubmit={handleSubmitEP}  className="grid space-y-2 gap-y-2">
        <BaseInput 
          id="emailid"
          type="text"
          label="Email ID"
          placeholder="Email"
          maxLength={50} 
          value={formData.emailid}
          onChangeEvents={handleChangeEP}
          ErrorMsg={errors.emailid || ''}
        /> 
        <BasePassword 
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          maxLength={50}
          value={formData.password}
          onChangeEvents={handleChangeEP}
          ErrorMsg={errors.password || ''}
        /> 
        <button
                type="button"
                onClick={()=> navigate('/forget-password')}
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
          <BaseButton state={status}  text="Login" />
      </form>
    </section>
</>);
};

export default LoginByEP;
