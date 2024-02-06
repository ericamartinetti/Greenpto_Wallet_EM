import ProfileImage from "@atoms/ProfileImage";
export default function MainHeader({title , subtitle}){
    return (
        <header className="flex justify-between">
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <h2 className="text-secondary">{subtitle}</h2>
            </div>
            <ProfileImage/>
        </header>
    )
}