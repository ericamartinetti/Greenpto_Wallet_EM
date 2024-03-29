import { Link } from 'react-router-dom';
export default function IconButton({ text, to = "#" }) {

   return (
      <Link to={to} className="w-32 block text-center">
         <button className="bg-tertiary rounded-3xl py-3 px-4 items-center justify-center">
            <p className="font-bold text-white text-xl mt-1">{text}</p>
         </button>
      </Link>
   )
}