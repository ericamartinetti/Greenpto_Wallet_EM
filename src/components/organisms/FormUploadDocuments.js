import Button from '@atoms/Button'
import InpunUploadFile from '@molecules/InputUploadFile'
export default function FormUploadDocuments(){
    return(
            <form className="flex flex-1 flex-col justify-between gap-5" >            
                <div className="flex flex-col item-center justify-center gap-5 mt-28">
                    <InpunUploadFile id="userID" text="Upload Your ID"/>
                    <InpunUploadFile id="userPhoto" text="Upload Your Photo"/>                  
                </div>
                <div className="text-center flex flex-col items-center mb-6 ">
                    <Button to="/wallet" type="accent">Next</Button>
                </div>             
        </form>
    )
}