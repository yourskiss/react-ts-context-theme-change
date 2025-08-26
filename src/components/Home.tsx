import { Link } from "react-router";
import Linkebutton from "../parts/home/HomeLink"
import img1 from "./../assets/images/registation/rafiki.svg";
/*
import img2 from "./assets/images/registation/amico.svg";
import img3 from "./assets/images/registation/cuate.svg";
*/
const Home: React.FC = () => {
  return (<>
  <div className="w-full flex justify-between items-center">
    <div className="grid grid-flow-row gap-y-1">
                <h2 className="w-full text-center mb-5 text-blue-primary font-roboto font-semibold text-[20px]">
                  Who are you?
                </h2>
                <p className="w-full text-center font-medium text-[16px] font-roboto flex flex-col gap-3">
                  <Linkebutton text="I am a Student" path="/student-registation"></Linkebutton>
                  <Linkebutton text="I am an Expert" path="/expert-registation"></Linkebutton>
                  <Linkebutton text="We are an Institution" path="/institution-registation"></Linkebutton>
                </p>
                <p className="w-full text-center mt-8 font-normal font-roboto text-[16px] text-body ">
                  Already have an account? 
                  <Link
                    to='/login'
                    className="ml-2 text-red-primary hover:blue-primary">
                    Login
                  </Link>
                </p>
    </div>
    <div className="bg-gray-secondary rounded-full h-[400px] w-[400px] xl:h-[500px] xl:w-[500px]  p-0 flex justify-center items-center overflow-hidden">
      <div className="w-full h-auto bg-transparent no-shadow">
       <div className="h-auto pb-7 xl:pb-9">
            <div className="w-full h-full">
                <img src={img1} alt="aaa" className="w-auto max-w-full h-full mx-auto" />
                <p  className="w-full  h-auto mt-2 xl:mt-4 text-[14px] xl:text-[16px] font-medium font-roboto text-secondary-dark-brown text-center">
                  Welcome
                </p> 
            </div>
        </div>
      </div>
    </div>
</div>
  </>);
};
export default Home;