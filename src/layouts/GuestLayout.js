import GuestHeader from '@organisms/GuestHeader'
export default function GuestLayout({children , title }){
     return( 
        <div className="h-screen flex flex-col justify-evenly p-8">
            <GuestHeader title={title}/>
            {children}
        </div>
     )
}