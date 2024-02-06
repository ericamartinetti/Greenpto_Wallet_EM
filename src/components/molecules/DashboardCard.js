export default function DashboardCard({ title, subtitle }) {
    return (
        <div className='relative'>
            <div className="bg-accent justify-between p-4 rounded-3xl border-[3px] border-secondary relative">
                <h2 className="text-[30px] text-secondary">{title}</h2>
                <h3 className="text-[30px] text-secondary  mt-3">{subtitle}</h3>
                <img className="absolute right-[-32px] top-14" src="/media/foglia.png" alt="Bitcoin illustration" />
            </div>
        </div>
    )
}