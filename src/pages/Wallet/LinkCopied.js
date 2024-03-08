import { Link } from "react-router-dom"
export default function LinkCopied() {
    return (
        <div className="flex justify-center flex-col h-screen my-2">
            <div className="bg-transparent border-secondary border-[5px] rounded-2xl flex flex-col items-center justify-center min-h-[60vh] gap-12 mx-6 ">
                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="green" d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>
                <h1 className="text-4xl text-semibold text-accent">Link Copied!</h1>
                <button className="bg-[#39A8D7] rounded-2xl py-3 px-9 items-center justify-center text-white text-semibold">
                    <Link to="/wallet" className="flex items-center">
                        <p className="text-green text-xl uppercase">back</p>
                    </Link>
                </button>
            </div>
        </div>
    )
}