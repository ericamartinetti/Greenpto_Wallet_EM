export default function Accordionheader({ children, active, first, last, onClick }) {
    let isActive = active ? " bg-accent text-white" : "text-black";
    let isFirst = first ? " border-b-1" : " ";
    let isLast = last ? " border-b-1 " : ""
    let additionClasses = isActive + isFirst + isLast
    let accordionArrow = active ? "rotate-180" : ""
    return (
        <h2 onClick={onClick}>
            <button
                className={"flex items-center px-2 justify-between h-16 w-full font-bold border-secondary border  text-white" + additionClasses}>
                <span className="">{children}</span>
                <svg className={accordionArrow} xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path fill="#C69A01" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
            </button>
        </h2>
    )
}