export default function Input({ id, placeholder, type = 'text', value = '' }) {
    return (
        <input
            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
            defaultValue={value}
            className="py-2 px-4 border border-gray-500 rounded-xl mt-2 focus:border-primary"
        />
    )
}