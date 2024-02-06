import { createBrowserRouter } from "react-router-dom";
import Root from '@pages/Root';

//Welcome
import Welcome from '@pages/Welcome';
//Register
import RegisterAccessData from '@pages/Register/AccessData';
import RegisterUserData from '@pages/Register/UserData';
import RegisterUploadDocuments from '@pages/UploadDocuments';
//Login
import Login from '@pages/Login/Login';
import OTP from '@pages/Login/OTP';
//Wallet
import WalletHome from '@pages/Wallet/Home';
import WalletSend from '@pages/Wallet/Send';
import WalletReceive from '@pages/Wallet/Receive';
import WalletMovements from '@pages/Wallet/Movements';
import WalletLinkCopied from '@pages/Wallet/LinkCopied';
//Market
import MarketHome from '@pages/Market/Home'
import MarketBuy from '@pages/Market/Buy'
import MarketSell from '@pages/Market/Sell'
//Profile
import ProfileHome from '@pages/Profile/Home'
import ProfileEditUserData from '@pages/Profile/EditUserData'
import ProfileEditPassword from '@pages/Profile/EditPassword'
import ProfileSupport from '@pages/Profile/Support'
import ProfileFAQ from '@pages/FAQ'

const router = createBrowserRouter([

    {
        path : '/',
        element : <Welcome/>
    },

    {
        path : '/register',
        element : <Root/>,
        children : [
            {
                path : '/register',
                element : <RegisterAccessData/>
            },

            {
                path : '/register/user-data',
                element : <RegisterUserData/>
            },

            {
                path : '/register/upload-documents',
                element : <RegisterUploadDocuments/>
            }
        ]

    },

    {
        path : '/login',
        element : <Root/>,
        children : [

            {
                path :'/login',
                element : <Login/>
            },

            {
                path :'/login/otp',
                element : <OTP/>
            }
        ]
    

    },

    {
        path : '/wallet',
        element : <Root/>,
        children : [

            {
                path :'/wallet',
                element : <WalletHome/>
            },
           
            {
                path :'/wallet/send',
                element : <WalletSend/>
            },

            {
                path :'/wallet/receive',
                element : <WalletReceive/>
            },

            {
                path :'/wallet/movements',
                element : <WalletMovements/>
            },

            {
                path :'/wallet/linkcopied',
                element : <WalletLinkCopied/>
            }
        ]
        
    

    },

    {
        path : '/market',
        element : <Root/>,
        children : [

           
            {
                path :'/market',
                element : <MarketHome/>
            },

            {
                path :'/market/buy',
                element : <MarketBuy/>
            },
            {
                path :'/market/sell',
                element : <MarketSell/>
            },
        ],
    
    },   

    {
        path : '/profile',
        element : <Root/>,
        children : [
          
            {
                path :'/profile',
                element : <ProfileHome/>
            },
            {
                path :'/profile/edit-user-data',
                element : <ProfileEditUserData/>
            },
            {
                path :'/profile/edit-password',
                element : <ProfileEditPassword/>
            },
            {
                path :'/profile/support',
                element : <ProfileSupport/>
            },
            {
                path :'/profile/faq',
                element : <ProfileFAQ/>
            },
        ]

    }
])
export default router