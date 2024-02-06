import ArrowDown from '@icons/ArrowDown';
import ArrowUp from '@icons/ArrowUp';
import Textlg from '@atoms/Textlg';
import Textsm from '@atoms/Textsm';
export default function Transaction({type , date, amount , conversion }){
   return(
            <div className="flex justify-between items-center">
                  <div className="flex items-center my-2">
                     {type === 'Send' ? <ArrowDown fill="fill-red-500" /> : <ArrowUp fill="fill-green-500" />}
                       <div className="ml-2 text-right">
                            <Textlg className=" font-bold capitalize">{type}</Textlg>
                            <Textsm>{date}</Textsm>
                       </div>
                  </div>
                 <div>
                     <Textlg className=" font-bold capitalize">{type === 'Send' ? '-' : '+'} {amount} USD</Textlg>
                     <Textsm>{conversion} BTC</Textsm>
                 </div>
            </div>
   )
}