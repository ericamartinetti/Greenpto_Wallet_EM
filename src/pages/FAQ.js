import MainLayout from "@layouts/MainLayout"
import Actionheader from '@organisms/Actionheader'
import Accordion from "@organisms/Accordion"
export default function FAQ(){
    const accordionItems = [
        {title : "What is Bitcoin" ,  body : "Bitcoin is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries."},
        {title : "Is there any risk" ,  body : "Widespread use of cryptocurrencies without regulation could lead to financial instability, market manipulation and financial crime"},
        {title : "How can I buy Bitcoin?" ,  body : "Let's see in detail all the procedures necessary to buy bitcoins, from the creation of a wallet to the purchase through a financial broker or on an exchange, to the use of CFDs or credit cards."}
    ]
    return(
        <MainLayout header={<Actionheader title="FAQ"/>}>
               <div className="mt-6">
                  <Accordion items={accordionItems} />
                </div>             
        </MainLayout>
    )
}