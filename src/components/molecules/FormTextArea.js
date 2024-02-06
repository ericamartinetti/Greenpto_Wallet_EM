import Label from '@atoms/Label'
import Textarea from '@atoms/Textarea'

export default function FormTextArea({ id, text, placeholder, required = "false", options }) {
  return (
    <div className="flex flex-col text-left w-full">
      <Label requiered={required}>{text}</Label>
      <Textarea
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}