import { NavLink as Link } from "react-router-dom"
import Textsm from '@atoms/Textsm'
export default function NavLink({icon , to = "#" , text }){
    return(
        <Link to={to} className={({isActive}) => isActive ? 'flex flex-col items-center mt-2 fill-primary' : 'flex flex-col items-center mt-2 fill-white'}>
            {icon} 
            <Textsm className='text-secondary'> {text}</Textsm>
        </Link>
    )
}