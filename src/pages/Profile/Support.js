import MainLayout from "@layouts/MainLayout"
import Actionheader from '@organisms/Actionheader'
import FormSupport from '@organisms/FormSupport'
export default function Support() {
    return (
        <MainLayout header={<Actionheader title="Support" />}>
            <FormSupport></FormSupport>
        </MainLayout>
    )
}