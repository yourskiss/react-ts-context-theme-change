import { Link } from "react-router"
import GoBackButton from "../utils/BackButton";
const Help: React.FC = () => {
  return (<>
  <GoBackButton />

<div className="w-full max-w-sm mx-auto">
  <h2 className="w-full mt-12 mb-8 text-center font-roboto font-semibold text-[20px] text-[#323232]"> Connect with us </h2>
  <div className="w-full flex flex-col gap-5 font-roboto font-normal text-[18px]">
      <Link 
      to="/" 
      className="group relative w-full flex justify-start items-center px-1 py-4 border-y-2 border-[#EAEAEA] cursor-pointer text-[#323232] hover:text-secondary-red">
        <img src="/src/assets/images/registation/icon_whatsapp.svg" alt="whatsapp" className="w-[35px]" />
        <span className="ml-3"> Whats App </span>
        <img src="data:image/svg+xml,%3csvg%20width='7'%20height='12'%20viewBox='0%200%207%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.290059%209.87998L4.17006%205.99998L0.290059%202.11998C-0.0999414%201.72998%20-0.0999414%201.09998%200.290059%200.70998C0.680059%200.31998%201.31006%200.31998%201.70006%200.70998L6.29006%205.29998C6.68006%205.68998%206.68006%206.31998%206.29006%206.70998L1.70006%2011.3C1.31006%2011.69%200.680059%2011.69%200.290059%2011.3C-0.0899414%2010.91%20-0.0999414%2010.27%200.290059%209.87998Z'%20fill='%23323232'/%3e%3c/svg%3e" alt="next" className="w-[7px] z-10 absolute right-5 top-1/2 -translate-y-1/2 hidden group-hover:block" />
      </Link>

      <Link 
      to="/" 
      className="group relative w-full flex justify-start items-center px-1 py-4 border-y-2 border-[#EAEAEA] cursor-pointer text-[#323232] hover:text-secondary-red">
        <img src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29.3332%208.00016C29.3332%206.5335%2028.1332%205.3335%2026.6665%205.3335H5.33317C3.8665%205.3335%202.6665%206.5335%202.6665%208.00016V24.0002C2.6665%2025.4668%203.8665%2026.6668%205.33317%2026.6668H26.6665C28.1332%2026.6668%2029.3332%2025.4668%2029.3332%2024.0002V8.00016ZM26.6665%208.00016L15.9998%2014.6668L5.33317%208.00016H26.6665ZM26.6665%2024.0002H5.33317V10.6668L15.9998%2017.3335L26.6665%2010.6668V24.0002Z'%20fill='%231B3867'/%3e%3c/svg%3e" alt="email" className="w-[32px]" />
        <span className="ml-3"> help@demo.com </span>
        <img src="data:image/svg+xml,%3csvg%20width='7'%20height='12'%20viewBox='0%200%207%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.290059%209.87998L4.17006%205.99998L0.290059%202.11998C-0.0999414%201.72998%20-0.0999414%201.09998%200.290059%200.70998C0.680059%200.31998%201.31006%200.31998%201.70006%200.70998L6.29006%205.29998C6.68006%205.68998%206.68006%206.31998%206.29006%206.70998L1.70006%2011.3C1.31006%2011.69%200.680059%2011.69%200.290059%2011.3C-0.0899414%2010.91%20-0.0999414%2010.27%200.290059%209.87998Z'%20fill='%23323232'/%3e%3c/svg%3e" alt="next" className="w-[7px] z-10 absolute right-5 top-1/2 -translate-y-1/2 hidden group-hover:block" />
      </Link>
    </div>
</div>
</>);
};
export default Help;