import MainLayout from "../../layouts/MainLayout";
import Actionheader from '@organisms/Actionheader';
import FormSend from '@organisms/FormSend';
export default function Send() {
  return (
    <MainLayout header={<Actionheader title="Send" />}>
      <FormSend />
    </MainLayout>
  )
}