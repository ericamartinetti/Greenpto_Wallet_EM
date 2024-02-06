import MainLayout from "../../layouts/MainLayout";
import Actionheader from '@organisms/Actionheader';
import FormEditUserData from "@organisms/FormEditUserData";
export default function EditUserData(){
    return(
        <MainLayout header={<Actionheader title="Edit user data"/>}>
              <FormEditUserData></FormEditUserData>   
        </MainLayout>
    )
}
