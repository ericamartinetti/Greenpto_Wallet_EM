import Forminput from '@molecules/Forminput'
import Button from '@atoms/Button'
export default function FormSend() {
    return (
        <form className="flex  flex-col gap-6 items-center">
                <Forminput
                    id="whithdrawalAddres"
                    text="WhithdrawalAddres"
                    placeholder="whithdrawalAddres"
                    type="email"
                    required={true}
                />
                  <Forminput
                    id="whithdrawalAmount"
                    text="WhithdrawalAmount"
                    placeholder="whithdrawalAmount"
                    type="email"
                    required={true}
                />
            <div className="text-center flex flex-col items-center mt-16 ">
                <Button to="/wallet" type="accent">Send</Button>
            </div>
        </form>
    )
}

