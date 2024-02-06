import { useNavigate } from "react-router-dom"
export default function BackButton() {
    const navigate = useNavigate();
    function Back() {
        navigate(-1);
    }
    return (
        <button onClick={Back} className="flex justify-center ">
            <img src="/media/Backbutton.png" alt="" />
        </button>
    )
}