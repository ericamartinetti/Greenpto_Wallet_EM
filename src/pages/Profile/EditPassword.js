import MainLayout from "@layouts/MainLayout"
import Actionheader from '@organisms/Actionheader'
import FormEditPassword from "@organisms/FormEditPassword"
export default function EditPassword(){
   return(
        <MainLayout header={<Actionheader title="Edit Password"/>}>
          <FormEditPassword/>  
        </MainLayout>
   )
}