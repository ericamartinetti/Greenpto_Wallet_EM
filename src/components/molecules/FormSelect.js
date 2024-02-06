import Label from '@atoms/Label'
import Select from '@atoms/Select'

export default function FormSelect({ id, text, placeholder, required = "false", options }) {
  return (
    <div className="flex flex-col text-left w-full">
      <Label requiered={required}>{text}</Label>
      <Select
        id={id}
        placeholder={placeholder}
        options={options} />
    </div>
  )
}