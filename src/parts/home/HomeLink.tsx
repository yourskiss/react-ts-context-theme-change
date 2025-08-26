import { Link } from "react-router";
interface info {
    text: string,
    path: string
}
const Linkebutton: React.FC<info> = ({ text, path }) => {
  return (<>
    <Link
        className="block text-center rounded-lg p-3 bg-gray-secondary hover:bg-red-primary text-red-primary hover:text-white focus:outline-none no-underline"
        to={path}>
            {text}
    </Link>
  </>);
};
export default Linkebutton;