import MainLayout from "../../layouts/MainLayout";
import Actionheader from '@organisms/Actionheader';
import FormBuy from '@organisms/FormBuy';
export default function Buy(){
    return(
        <MainLayout header={<Actionheader title="Buy"/>}>
            <FormBuy/>      
        </MainLayout>
    )
}


 