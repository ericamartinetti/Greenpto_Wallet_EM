import React, { useState } from 'react';
import MainLayout from "@layouts/MainLayout";
import Actionheader from '@organisms/Actionheader';
import Transaction from '@molecules/Transaction';

export default function Movements() {
  const [activeFilter, setActiveFilter, ] = useState(''); // Stato per il filtro attivo
  const transactions = [
    {type : 'Receive', date : '29/01/2023',  amount : '250,00', conversion : '0.011' },
    {type : 'Send', date : '15/03/2023',  amount : '12.000', conversion : '0.052' },
    {type : 'Receive', date : '27/04/2023',  amount : '192,00', conversion : '0.0064' },
    {type : 'Receive', date : '29/01/2023',  amount : '250,00', conversion : '0.011' },
    {type : 'Send', date : '15/03/2023',  amount : '12.000', conversion : '0.052' },
    {type : 'Receive', date : '27/04/2023',  amount : '192,00', conversion : '0.0064' },
    {type : 'Receive', date : '29/01/2023',  amount : '250,00', conversion : '0.011' },
    {type : 'Send', date : '15/03/2023',  amount : '12.000', conversion : '0.052' },
    {type : 'Receive', date : '27/04/2023',  amount : '192,00', conversion : '0.0064' },  ];

  const filteredTransactions = transactions.filter(transaction => {
    return activeFilter === '' || transaction.type === activeFilter;
  });


  const handleFilterClick = (type) => {
    // Se il bottone cliccato è già attivo, azzera il filtro
       setActiveFilter((prevFilter) => (prevFilter !== type ? type : prevFilter));        
  };

  const handleResetFilters = () => {
    setActiveFilter('');
  };

  return (
    <MainLayout header={<Actionheader title="Movements"/>}>
      <div className="h-full flex flex-col justify-center">
        <div className="flex mb-12">
          <h2 className="text-2xl filter">Filter :</h2>
          <button
            className={`bg-accent text-white mx-2 rounded-3xl font-bold grow ${activeFilter === 'Send' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Send')}
          >
            Send
          </button>
          <button
            className={`bg-accent text-white mx-2 rounded-3xl font-bold grow ${activeFilter === 'Receive' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Receive')}
          >
            Received
          </button>
          <button className=" text-yellow-600 mx-2 rounded-3xl font-bold grow flex items-center justify-center" onClick={handleResetFilters}>
             <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#075167" d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg>
          </button>
            
          
        </div>
        <div className="overflow-y-scroll max-h-96">
          {filteredTransactions.map(
            (transaction, index) =>
              transaction.type === activeFilter || activeFilter === '' ? (
                <Transaction
                  key={index}
                  type={transaction.type}
                  date={transaction.date}
                  amount={transaction.amount}
                  conversion={transaction.conversion}
                />
              ) : null
          )}
        </div>
      </div>
    </MainLayout>
  );
}




