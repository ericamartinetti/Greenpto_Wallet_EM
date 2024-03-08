import { Link } from "react-router-dom"
export default function SendButton({ text, to = "#" }) {
    return (
        <Link to={to} className="w-32 block text-center">
            <button className="bg-[#39A8D7] rounded-2xl py-3 px-9 items-center justify-center">
                <p className="font-bold text-white text-xl mt-1 uppercase">{text}</p>
            </button>
        </Link>
    )
}