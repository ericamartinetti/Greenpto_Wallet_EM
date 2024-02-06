import NavLink from '@molecules/NavLink';
import Walleticon from '@icons/Walleticon';
import Marketicon from '@icons/Marketicon';
import Profileicon from '@icons/Profileicon';
export default function NavBar(){
    return(
        <nav className="bg-accent text-white h-20 rounded-[30px] border-secondary border-[3px] flex item-center justify-center gap-16">
            <NavLink text="Wallet" icon={<Walleticon/>} to="/wallet"/>
            <NavLink text="Market" icon={<Marketicon/>} to="/market"/>
            <NavLink text="Profile" icon={<Profileicon/>} to="/profile"/>
        </nav>
    )
}