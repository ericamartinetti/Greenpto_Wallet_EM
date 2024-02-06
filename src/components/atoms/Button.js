import { Link } from "react-router-dom"

export default function Button({children, to = '#', type = 'accent'}){ 
    const styles = {
        primary : 'bg-primary',
        secondary : 'bg-secondary',
        accent : 'bg-accent',
    }
    return(       
        <button className="w-48 ">
            <Link to={to} className={" w-full  bg-accent flex justify-center items-center py-3 rounded-xl text-white uppercase font-semibold text-2xl " + styles[type]}>
              {children}
            </Link>
       </button>
    )
}