import Button from '@atoms/Button'
import InputOTP from '@atoms/InputOTP';

export default function FormOTP(){  
    return(
        <form className="flex flex-1 flex-col justify-between gap-5 mt-40">
            <div className='flex flex-col items-center'>
                <p className='text-stone-500 font-semibold text-lg'>
                    We have sent you an OTP to your email address. Please enter the OTP below to verify your email address.
                </p>              
                <div className='flex justify-evenly mt-10 gap-4'>
                   <InputOTP/>
                   <InputOTP/>
                   <InputOTP/>
                   <InputOTP/>
                   <InputOTP/>
                   <InputOTP/>
                </div>
                <p className='text-stone-500 mt-8 font-semibold text-lg text-center'>
                    <span className='font-bold'> SendIcon New OTP in : </span>  00:30
                </p>
                <div>               
               </div>              
            </div>
            <div className="text-center flex flex-col items-center mb-6 ">
                <Button to="/wallet" type="accent">Next</Button>           
            </div>
        </form>
    )
}