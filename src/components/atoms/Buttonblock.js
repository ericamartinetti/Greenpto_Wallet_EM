import { Link } from 'react-router-dom';
import Textlg from '@atoms/Textlg'
import Arrowrigth from '@icons/Arrowrigth'
export default function Buttonblock({ children, type = 'accent', to = '#' }) {

  const styles = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent'
  }
  return (
    <Link to={to} className={"h-16 flex justify-between text-white bg-accent items-center px-4 rounded-2xl font-bold " + styles[type]}>
      <Textlg>
        {children}
      </Textlg>
      <Arrowrigth></Arrowrigth>
    </Link>
  )



}