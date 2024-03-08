import { Link } from 'react-router-dom';
export default function SellButton({ text, to = "#" }) {
   return (
      <Link to={to} className="w-32 block text-center">
         <button className="bg-tertiary rounded-2xl py-3 px-9 items-center justify-center">
            <p className="font-bold uppercase text-secondary text-xl mt-1">{text}</p>
         </button>
      </Link>
   )
}