import Button from '@atoms/Button'
import { Link } from "react-router-dom"
import Forminput from '@molecules/Forminput'
import Forminputpassword from '@molecules/Forminputpassword'
export default function FormAccessData() {
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col item-center justify-center gap-5 mt-10">
                <Forminput id="email" text="Email" placeholder="Insert your Email" type="email" required={true} />
                <Forminputpassword
                    id='password'
                    text='Password'
                    placeholder='Insert your password'
                />
                <Forminputpassword
                    id='confirmpassword'
                    text='Confirm Password'
                    placeholder='Confirm your password'
                />
            </div>
            <div className="text-center flex flex-col items-center mb-6 ">
                <Button to='/register/user-data' type="accent">Next</Button>
                <Link to="/login" className="text-xl font-bold uppercase underline py-7 text-black">log in</Link>
            </div>
        </form>
    )
}