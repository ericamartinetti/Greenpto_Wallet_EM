export default function Textarea({ id, placeholder, type = 'text', value = '' }) {
    return (
        <textarea
            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
            defaultValue={value}
            className="py-2 px-4 min-h-[150px] border border-gray-500 rounded-xl mt-2 focus:border-accent">
        </textarea>
    )
}