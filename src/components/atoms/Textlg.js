export default function Textlg({children , className}){
    return(
       <p className={'text-lg text-left ' + className}>{children}</p>
    )
}