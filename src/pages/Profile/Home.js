import MainLayout from '@layouts/MainLayout';
import MainHeader from '@organisms/MainHeader';
import Buttonblock from '@atoms/Buttonblock'
export default function Home(){
  return(
    <MainLayout header={<MainHeader title="Profile"/>}>    
      <div className="flex flex-col mt-10 gap-4">    
        <Buttonblock to="/profile/edit-user-data">Edit User Data</Buttonblock>
        <Buttonblock to="/profile/edit-password">Edit Password</Buttonblock>
        <Buttonblock to="/profile/support">Support</Buttonblock>
        <Buttonblock to="/profile/faq">F.A.Q</Buttonblock>      
        <Buttonblock to="/" type='secondary'>Logout</Buttonblock>
      </div>
    </MainLayout>
  )
}