import MainLayout from "@layouts/MainLayout";
import Actionheader from '@organisms/Actionheader';
import FormSell from '@organisms/FormSell'
export default function Sell(){
    return(
        <MainLayout header={<Actionheader title="Sell"/>}>
                  <FormSell></FormSell>
        </MainLayout>
    )
}