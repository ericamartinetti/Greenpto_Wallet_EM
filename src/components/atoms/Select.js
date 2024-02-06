export default function Select({ id, placeholder, options = [] }) {
    return (
        <select
            id={id}
            name={id}
            defaultValue={placeholder}
            className="py-2 px-4 border border-gray-500 rounded-xl mt-2 focus:border-accent" >
            <option disabled>{placeholder}</option>
            {
                options.map((option, index) => {
                    return (<option key={index}>{option}</option>)
                })
            }
        </select>
    )
}