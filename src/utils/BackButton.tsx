import { useNavigate } from 'react-router';
interface PropInfo {
    statechange?: boolean,
    onClickBack?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
import backbutn from "./../assets/images/registation/back-arrow.svg";

const GoBackButton : React.FC<PropInfo> =  ({ statechange, onClickBack }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // history.back()
    } else {
      navigate('/');
    }
  };
  return (<>
        <button 
            className="absolute left-3 top-2 sm:left-5 sm:top-4 flex justify-center items-center gap-3 cursor-pointer text-black hover:text-red-primary"
            onClick={ statechange ? onClickBack : handleGoBack }
            >
                <img src={backbutn} alt="back" className="w-[9px]" />
                <span className="font-normal text-[16px] font-roboto">
                    Back
                </span>
        </button>
  </>);
};

export default GoBackButton;
