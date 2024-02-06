import DashboardCard from '@molecules/DashboardCard';
import MainLayout from '@layouts/MainLayout';
import MainHeader from '@organisms/MainHeader';
import BuyButton from '@atoms/BuyButton';
import SellButton from '@atoms/SellButton';
export default function Home() {
  return (
    <MainLayout header={<MainHeader title="Market" />}>
      <DashboardCard
        title={<span> +34.983,00 <span className="text-white text-2xl font-semibold">USD</span></span>}
        subtitle={<span> 1,0002348 <span className="text-white text-2xl font-semibold">BTC</span></span>}
      />
      <div className='mt-16'>
        <img className='w-full' src="/media/Grafico.png" alt="market" />
      </div>
      <div className=" mt-10 flex justify-center gap-14">
        <BuyButton text='Buy' to="/market/buy"></BuyButton>
        <SellButton text=' Sell' to="/market/sell"></SellButton>
      </div>
    </MainLayout>
  )
}