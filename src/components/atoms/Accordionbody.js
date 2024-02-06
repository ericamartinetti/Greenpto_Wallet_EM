export default function Accordionbody({ children, active, last }) {
    let isActive = active ? " " : " hidden "
    let isLast = last ? "roundend-b-xl" : "border-b-0"
    let additionClasses = isActive + isLast
    return (
        <div className={" border-secondary border-b-0 border" + additionClasses}>
            <p className="">{children}</p>
        </div>
    )



}