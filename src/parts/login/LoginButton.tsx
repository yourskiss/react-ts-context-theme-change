import { useNavigate } from 'react-router';
interface PropInfo {
    path: string,
    lable:string
}
 

const LoginButton : React.FC<PropInfo> =  ({ path, lable }) => {
  const navigate = useNavigate();
  const handleGoTo = () => {
      navigate(path);
  };
  return (<>
        <button 
            className="inline-block text-center rounded-md py-3 px-5   bg-red-secondary hover:bg-red-primary text-red-primary hover:text-white focus:outline-none no-underline shadow-[0px_0px_1px_0px_#00000040]"
            onClick={handleGoTo}
        >
                {lable}
        </button>
  </>);
};

export default LoginButton;
