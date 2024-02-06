import Accordionbody from "@atoms/Accordionbody"
import Accordionheader from "@atoms/Accordionheader"
import { useState } from "react"
export default function Accordionitems({ title, body, active = false, first = false, last = false }) {
    const [isActive, setIsActive] = useState(active);
    function toggleAccordion() {
        setIsActive(!isActive);
    }
    return (
        <div className="mt-6">
            <div>
                <Accordionheader
                    active={isActive}
                    first={first}
                    last={last}
                    onClick={toggleAccordion}
                >{title}</Accordionheader>
                <Accordionbody
                    active={isActive}
                    last={last}
                >
                    {body}
                </Accordionbody>
            </div>
        </div>
    )
}