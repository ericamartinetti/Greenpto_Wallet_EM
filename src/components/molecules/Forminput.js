import Label from '@atoms/Label'
import Input from '@atoms/input'

export default function Forminput({ id, text, placeholder, type = text, required = "false", value = "" }) {
  return (
    <div className="flex flex-col text-left w-full">
      <Label requiered={required}>{text}</Label>
      <Input value={value} id={id} placeholder={placeholder} type={type} />
    </div>
  )
}