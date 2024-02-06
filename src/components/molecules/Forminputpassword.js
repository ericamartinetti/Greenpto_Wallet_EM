import { useState } from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import Forminput from '@molecules/Forminput'
export default function Forminputpassword({id , text , placeholder}){
        const [password, setPassword] = useState("");
        const [type, setType] = useState('password');
        const [icon, setIcon] = useState(eyeOff);
        const handleToggle = () => {
            if (type==='password'){
               setIcon(eye);
               setType('text')
            } else {
               setIcon(eyeOff)
               setType('password')
            }
         }
        return(           
            <div className='flex '>
                <Forminput
                  id={id}
                  text={text}  
                  placeholder={placeholder}
                  type={type} 
                  required={true} 
                  onChange={(e) => setPassword(e.target.value)}                         
                />                                       
                <span className="flex justify-around items-center mt-8" onClick={handleToggle}>
                    <Icon className="absolute mr-10" icon={icon} size={25}/>
                </span>
            </div>    
        )
}    
              
         
       
    


   


