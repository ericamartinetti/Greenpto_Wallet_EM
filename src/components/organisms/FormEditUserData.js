import Button from '@atoms/Button'
import Forminput from '@molecules/Forminput'
export default function FormEditUserData(){ 
    return(
        <form className="flex flex-1 flex-col justify-between gap-5">
            <div className="flex flex-col item-center justify-center gap-5">
                <Forminput 
                    id="name" 
                    text="Name" 
                    placeholder="Insert your Name" 
                    required={true} 
                    value="Erica"
                />
                <Forminput 
                    id="surname" 
                    text="Surname" 
                    placeholder="Insert your Surname" 
                    required={true}
                    value="Martinetti" 
                />
                <Forminput 
                    id="birthday" 
                    text="Birthday" 
                    placeholder="Insert your Birthday" 
                    type="date"
                    required={true} 
                    value="1993-08-17"                
                />
                <Forminput 
                    id="address" 
                    text="Address" 
                    placeholder="Insert your address" 
                    required={true} 
                    value="Via fontona antica 24"
                />
                <div className='grid grid-cols-2 gap-4 '>
                    <Forminput 
                        id="city" 
                        text="City" 
                        placeholder="Insert your City" 
                        required={true} 
                        value="Palermo"
                    />
                    <Forminput 
                        id="postal code" 
                        text="Postal Code" 
                        type="number"
                        placeholder="Insert your Postal Code" 
                        required={true} 
                        value="95684"
                    />
                </div>           
            </div>
            <div className="text-center flex flex-col items-center mt-6">
                <Button to="/profile" type="accent">Confirm</Button>
            </div>
        </form>
    )
}