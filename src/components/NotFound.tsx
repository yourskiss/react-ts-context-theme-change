import GoBackButton from "../utils/BackButton";

const NotFound: React.FC = () => {
  return <>
  <GoBackButton />
    <div className="w-full pt-20">
      <h2 className='w-full font-sance text-center font-black text-red-primary text-9xl'>404</h2>
      <p className='w-full font-arial text-center font-medium text-blue-primary text-3xl'>Page Not Found</p>
    </div>
  </>;
};

export default NotFound;