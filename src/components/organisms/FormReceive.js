import Forminput from '@molecules/Forminput'
import Button from '@atoms/Button'
export default function FormReceive() {
    return (
        <form className="flex flex-1 flex-col gap-8 item-center">        
            <Forminput
                id="walletlAddress"
                text="Wallet Address"
                placeholder="jak7dvr38gcnisdf34"
                type="text"
                required={true}
            />
            <div className="text-center flex flex-col items-center mt-auto ">
                <Button to="/wallet/linkcopied">Copy Link</Button>
            </div>            
        </form>
    )
}

