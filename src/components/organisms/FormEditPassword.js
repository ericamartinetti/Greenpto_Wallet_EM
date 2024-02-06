import Button from '@atoms/Button'
import Forminputpassword from '@molecules/Forminputpassword'
export default function FormEditPassword() {
    return (
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col item-center justify-center gap-5 mt-10">
                <Forminputpassword
                    id='password'
                    text='Password'
                    placeholder='Insert your password'
                />
                <Forminputpassword
                    id='newpassword'
                    text='New Password'
                    placeholder='Insert new password'
                />
                <Forminputpassword
                    id='confirmpassword'
                    text='Confirm Password'
                    placeholder='Confirm new password'
                />
            </div>
            <div className="text-center flex flex-col items-center mt-12 ">
                <Button to='/profile' type="accent">Confirm</Button>
            </div>
        </form>
    )
}