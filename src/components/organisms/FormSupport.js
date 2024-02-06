import Button from '@atoms/Button'
import FormTextArea from '@molecules/FormTextArea'
import FormSelect from '@molecules/FormSelect'
export default function FormEditSupport(){
    return(
        <form className="flex flex-1 flex-col justify-between gap-5 mt-6">
            <div className="flex flex-col item-center justify-center gap-5 mt-10">            
                <FormSelect
                 id='problem'
                 text='Problem'
                 placeholder='Choose problem'
                 required={true}
                 options={['Problem whit the app' , 'Problem with the website' , 'Problem whit the payment' , 'Other']}
                />
                <FormTextArea
                 id='problem'
                 text='Description'
                 placeholder='Descrive you problems'
                 required={true}
                />
            </div>
            <div className="text-center flex flex-col items-center mt-12 ">
                <Button to='/profile' type="accent">Confirm</Button>
            </div>
        </form>
    )
}