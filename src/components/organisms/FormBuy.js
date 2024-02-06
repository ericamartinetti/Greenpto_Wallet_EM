import Forminput from '@molecules/Forminput'
import Button from '@atoms/Button'

export default function FormBuy() {
    return (
        <form className="flex flex-1 flex-col items-center gap-10">
                <Forminput
                    id="amount"
                    text="Amount in USD"
                    placeholder="Insert your amoun in USD"
                    type="number"
                    required={true}
                />
                <Forminput
                    id="conversion"
                    text="Conversion in BTC"
                    placeholder="Amount in BTC"
                    type="number"
                    required={true}
               />
            <div className="text-center flex flex-col items-center mt-6 ">
                <Button to="/market" type="accent">Buy</Button>
            </div>
        </form>
    )


}