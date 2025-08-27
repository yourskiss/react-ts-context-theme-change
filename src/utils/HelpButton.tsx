import { Link } from 'react-router';
const HelpSection : React.FC  =  () => {
   
  return (<>
       <div className="absolute right-3 bottom-2 sm:right-5 sm:bottom-4">
                <Link
                  className="text-body font-secondary hover:text-red-primary font-normal text-[14px] sm:text-[16px] focus:outline-none no-underline"
                  to="/help">
                      Help?
                </Link>
        </div>
  </>);
};

export default HelpSection;
