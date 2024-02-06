import NavBar from '@organisms/NavBar';
export default function MainLayout ({children , header}){
    return(
        <div className=" h-screen flex flex-col justify-between p-6 ">     
            {header}
            <div className="grow pt-10">
                {children}
            </div>
            <NavBar/>
        </div>
    )
}