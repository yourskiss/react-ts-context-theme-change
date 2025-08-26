import { useState } from "react";

import GoBackButton from "../utils/BackButton";
import StudentInfo from "../parts/register-student/StudentInfo";
import StudentOtp from "../parts/register-student/StudentOTP";


interface UserType {
  fullname: string,
  email: string,
  phone: string,
  dob: string,
  password: string,
  cp: string,
  country: string,
  statename:string,
  state: string,
  city: string,
  gender: string,
  terms:boolean
}

const RegisterStudent: React.FC = () => {

 const[stage, setStage] = useState<number>(1);
 const changeStage = (val:number) => {
    setStage(val);
 }  

 const [userData, setUserData] = useState<UserType>({
    fullname: 'Test Test',
    email: 'test@in.com',
    phone: '9876543210',
    dob: '',
    password: 'Ddlj@123',
    cp:'Ddlj@123',
    country: 'IN',
    statename:'',
    state: '',
    city: '',
    gender: '',
    terms:false
  });

 
  return (<>
  { stage === 1 ? <GoBackButton /> : <GoBackButton statechange={true} onClickBack={()=> changeStage(1)} /> }
  <div className=" relative w-5/6 mx-auto">
     { stage === 1 ? <>
      <StudentInfo userData={userData} setUserData={setUserData} changeStage={()=> changeStage(2)} />
     </> : <>
      <StudentOtp userData={userData} changeStage={()=> changeStage(1)} />
     </> }
  </div>
</>);
};
export default RegisterStudent;