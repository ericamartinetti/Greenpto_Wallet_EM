import Forminput from '@molecules/Forminput'
import Button from '@atoms/Button'
export default function FormSell() {
    return (
        <form className="flex flex-1 flex-col items-center gap-10">
                <Forminput
                    id="amount"
                    text="Amount in BTC"
                    placeholder="Insert your amoun in BTC"
                    type="number"
                    required={true}
                />
                <Forminput
                    id="conversion"
                    text="Conversion in USD"
                    placeholder="Amount in USD"
                    type="number"
                    required={true}
                />
            <div className="text-center flex flex-col items-center mt-10 ">
                <Button to="/market" type="accent">Sell</Button>
            </div>         
        </form>
    )
}