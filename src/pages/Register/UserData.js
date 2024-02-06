import GuestLayout from '@layouts/GuestLayout'
import FormUserData from '@organisms/FormUserData'
export default function userData(){
    return(
        <GuestLayout title="Register" >
            <FormUserData/>               
        </GuestLayout>
    )
}