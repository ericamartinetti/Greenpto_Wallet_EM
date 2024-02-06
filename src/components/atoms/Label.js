export default function Label({ htmlFor, children, required = "false" }) {
    return (
        <label className="font-bold" htmlFor="">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    )
}