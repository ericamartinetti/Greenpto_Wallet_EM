import Button from '@atoms/Button'
import Forminput from '@molecules/Forminput'
export default function FormUserData(){
    return(
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6" >
            <div className="flex flex-col item-center justify-center gap-5 mt-6">
                <Forminput 
                    id="name" 
                    text="Name" 
                    placeholder="Insert your Name" 
                    required={true} 
                />
                <Forminput 
                    id="surname" 
                    text="Surname" 
                    placeholder="Insert your Surname" 
                    required={true} 
                />
                <Forminput 
                    id="birthday" 
                    text="Birthday" 
                    placeholder="Insert your Birthday" 
                    type="date"
                    required={true} 
                />
                <Forminput 
                    id="address" 
                    text="Address" 
                    placeholder="Insert your address" 
                    required={true} 
                />
                <div className='grid grid-cols-2 gap-4 '>
                    <Forminput 
                        id="city" 
                        text="City" 
                        placeholder="Insert your City" 
                        required={true} 
                    />
                    <Forminput 
                        id="postal code" 
                        text="Postal Code" 
                        placeholder="Insert your Postal Code" 
                        required={true} 
                    />
                </div>
            </div>
            <div className="text-center flex flex-col items-center mb-6 ">
                <Button to="/register/upload-documents" type="accent">Next</Button>
            </div>
        </form>
    )
}