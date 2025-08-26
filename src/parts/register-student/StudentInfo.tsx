 
 import { useState } from "react";
 import { toast } from 'react-toastify';

import BaseButton from "./../../utils/BaseButton";
import BaseInput from "./../../utils/BaseInput";
import BasePassword from "./../../utils/BasePassword";

import GenderRadio from "./../../utils/GenderRadio";
import AcceptTnC from "./../../utils/AcceptTnC";
import DobInput from "./../../utils/DobInput";
import StateDD from "./../../utils/StateDD";
import CityDD from "./../../utils/CityDD";

  interface FormType {
     fullname:string,
     email:string, 
     phone:string,
     dob:string,
     password:string,
     cp: string,
     country:string,
     statename:string,
     state:string,
     city:string,
     gender:string,
     terms:boolean
  }
  interface ErrorType {
     fullname?:string,
     email?:string, 
     phone?:string,
     dob?:string,
     password?:string,
     cp?:string,
     state?:string,
     city?:string,
     gender?:string
     terms?:string,
  }
  interface PropInfo {
    userData: FormType;
    setUserData: React.Dispatch<React.SetStateAction<FormType>>;
    changeStage?: () => void;
  }


const StudentInfo: React.FC<PropInfo> = ({ userData, setUserData, changeStage }) => {
  const [status, setStatus] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorType>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone' && !/^\d*$/.test(value)) return;  
    setUserData((prev) => ({ ...prev, [name]:  value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); 
  };
  const changeState = (e: React.ChangeEvent<HTMLSelectElement>) => {
 
    const selectedOption = e.target.options[e.target.selectedIndex];
    const state_long = selectedOption.getAttribute("data-name"); 
 
    setUserData((prev) => ({ ...prev, statename:state_long || "", state:e.target.value, city: '' }));
    setErrors((prev) => ({ ...prev, state : '' })); 
  }
  const changeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserData((prev) => ({ ...prev, city:  e.target.value }));
    setErrors((prev) => ({ ...prev, city : '' })); 
  }
  const genderChange = (tab: string) : void => {
    setUserData((prev) => ({ ...prev, gender : tab }));
    setErrors((prev) => ({ ...prev, gender : '' })); 
  }
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData((prev) => ({ ...prev, terms: event.target.checked  }));
    setErrors((prev) => ({ ...prev, terms: '' }));
  };
  const validates = ()  => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //  const newErrors: typeof errors = {};
    const newErrors: ErrorType = {};
    if (!userData.fullname) {
      newErrors.fullname = 'Name is required.';
    }

    if (!userData.email) {
      newErrors.email = 'Email is required.';
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!userData.phone) {
     newErrors.phone = 'Phone number is required.';
   } else if (userData.phone.length !== 10) {
     newErrors.phone = 'Phone Number must be 10 Digits';
   } else if (!/^[6-9]/.test(userData.phone)) {
     newErrors.phone = 'Phone number must start with 6, 7, 8, or 9.';
   }

   if (!userData.dob) {
     newErrors.dob = 'Date of Birth is required.';
   }

    if (!userData.password) {
      newErrors.password = 'Password is required.';
    } else if (userData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }  else if (userData.password.length > 12) {
      newErrors.password = 'Password must be Maximum 12 characters.';
    }  else if (!/[A-Z]/.test(userData.password)) {
      newErrors.password = 'Password must include at least one uppercase letter.';
    } else if (!/[a-z]/.test(userData.password)) {
      newErrors.password = 'Password must include at least one lowercase letter.';
    } else if (!/[0-9]/.test(userData.password)) {
      newErrors.password = 'Password must include at least one number.';
    } else if (!/[!@#$%^&*]/.test(userData.password)) {
      newErrors.password = 'Password must include at least one special character (!@#$%^&*).';
    }

    if (!userData.cp) {
      newErrors.cp = 'Confirm Password is required.';
    } else if (userData.password !== userData.cp) {
      newErrors.cp = 'Confirm Passwords do not match.';
    } 

    if (!userData.state) {
      newErrors.state = 'State is required.';
    }

    if (!userData.city) {
      newErrors.city = 'City is required.';
    }

    if (!userData.gender) {
      newErrors.gender = 'Gender is required.';
    }
    if (!userData.terms) {
      newErrors.terms = 'Please Accept the Terms & Condition ';
      toast.error("Please Accept the Terms & Condition");
    }
 
 
    return newErrors;
    
  };
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validates();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
        setStatus(true);
        setTimeout(()=>{
          setStatus(false);
                console.log('Form Submited - ', userData);
               // toast.success("Form Submited Successfully");
               if(changeStage) { changeStage(); }
        },2000);

    }
  };


  return (<>
  <section className="w-full mb-7">
          <h1 
            className="w-full text-center font-roboto text-[24px] font-semibold text-blue-primary">
              Student Registration
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
              value={userData.fullname}
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
              value={userData.email}
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
              value={userData.phone}
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
              value={userData.dob}
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
              value={userData.password}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.password || ''}
            /> 
          </div>  
          <div className="w-full lg:w-1/2">
            <BasePassword 
              id="cp"
              type="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              maxLength={12} 
              value={userData.cp}
              onChangeEvents={handleChange}
              ErrorMsg={ errors.cp || ''}
              passwordtype={true}
            /> 
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4">
          <div className="w-full lg:w-1/2">
          <StateDD 
            id="state"
            label="State"
            selectedCountry={userData.country}
            selectedState={userData.state}
            changeState={changeState}
            ErrorMsg={ errors.state || ''}
          />
          </div>

          <div className="w-full lg:w-1/2">
          <CityDD 
            id="city"
            label="City"
            selectedCountry={userData.country}
            selectedState={userData.state}
            selectedCity={userData.city}
            changeCity={changeCity}
            ErrorMsg={ errors.city || ''}
          />
          </div>
        </div>
        <div className="w-full flex flex-col  space-x-0 lg:space-x-4 space-y-4">
            <GenderRadio 
              value={userData.gender}
              genderChange={genderChange}
              ErrorMsg={ errors.gender || ''}
            />
        </div>
        <div className="w-full flex flex-col  space-x-0 lg:space-x-4 space-y-4">
            <AcceptTnC
              checked={userData.terms}
              handleCheckboxChange={handleCheckboxChange}
              ErrorMsg={errors.terms || ''}  
            />  
        </div>
        <div className="w-full flex justify-center space-x-0 lg:space-x-4 space-y-4">
          <aside className="w-[200px]">
              <BaseButton state={status} text="Next" />
          </aside>
        </div>
      </form>
  </>);
};
export default StudentInfo;