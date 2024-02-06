import Button from '@atoms/Button';
import { Link } from "react-router-dom";
function Welcome() {
  
   return (
    <div className="flex flex-col justify-center ">
      <header className="flex iteams text-center center justify-center">
        <div>
          <img className="mt-40 mx-0 object-cover " src="/media/LogoStart.png" alt="logo: illustration of a wallet for bitcoins"/>
       </div>
      </header>    
        <div className="flex justify-center  flex-col items-center py-20">
          <Button to="/login" type="accent"> Log in</Button>    
            <Link to="/register" className="text-xl uppercase underline py-7 text-black">
              sign up
            </Link>
        </div>   
    </div>
  );
}
export default Welcome;
