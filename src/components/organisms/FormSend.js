import Forminput from '@molecules/Forminput'
import Button from '@atoms/Button'
export default function FormSend() {
    return (
        <form className="flex  flex-col gap-6 items-center">
                <Forminput
                    id="Whithdrawal Address"
                    text="Whithdrawal Address"
                    placeholder="Whithdrawal Address"
                    type="email"
                    required={true}
                />
                  <Forminput
                    id="Whithdrawal Amount"
                    text="Whithdrawal Amount"
                    placeholder="Whithdrawal Amount"
                    type="email"
                    required={true}
                />
            <div className="text-center flex flex-col items-center mt-16 ">
                <Button to="/wallet" type="accent">Send</Button>
            </div>
        </form>
    )
}

