import DashboardCard from '@molecules/DashboardCard';
import { Link } from 'react-router-dom';
import Textlg from '@atoms/Textlg';
import Transaction from '@molecules/Transaction';
import ReceiveButton from '@atoms/ReceiveButton';
import MainLayout from '@layouts/MainLayout';
import MainHeader from '@organisms/MainHeader';
import SendButton from '@atoms/SendButton';
export default function Home() {
  const transaction = [
    { type: 'Receive', date: '29/01/2023', amount: '250,00', conversion: '0.011' },
    { type: 'Send', date: '15/03/2023', amount: '12.000', conversion: '0.052' },
    { type: 'Receive', date: '27/04/2023', amount: '192,00', conversion: '0.0064' },

  ]
  return (
    <MainLayout
      header={<MainHeader
        title="Wallet"
        subtitle={<span className='font-inter'> Welcome <span className='font-bold'>Erica</span></span>} />}>
      <DashboardCard
        title={<span> 2.795 <span className="text-white text-3xl font-semibold">USD</span></span>}
        subtitle={<span> 0,064 <span className="text-white text-3xl font-semibold">BTC</span></span>}
      />
      <div className="mt-10">
        <div className="flex justify-between ">
          <Textlg className=" font-bold">Last Transaction</Textlg>
          <Link to="/wallet/movements" className="font-semibold text-black hover:underline">View All</Link>
        </div>
        {
          transaction.map((transaction, index) => {
            return <Transaction key={index} type={transaction.type} date={transaction.date} amount={transaction.amount} conversion={transaction.conversion} />
          })
        }
      </div>
      <div className=" mt-20 flex justify-center gap-14">
        <SendButton text='Send' to="/wallet/send"></SendButton>
        <ReceiveButton text='Receive' to="/wallet/receive"></ReceiveButton>
      </div>
    </MainLayout>
  )
}