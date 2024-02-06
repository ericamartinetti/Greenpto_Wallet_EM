import ProfileImage from '@atoms/ProfileImage'
import BackButton from '@atoms/BackButton'
export default function Actionheader({ title, subtitle }) {
    function renderTitle() {
        if (title) {
            return (
                <h1 className="text-[2.75rem] mt-5 text-center">
                    <span className="text-accent">{title[0]}</span>{title.slice(1)}
                </h1>
            )
        }

    }
    return (
        <header>
            <div className="flex items-center justify-between">
                <BackButton />
                <ProfileImage />
            </div>
            <div>
                {renderTitle()}
            </div>
        </header>
    )
}