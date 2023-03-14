import React, { useState } from 'react';
import useEth from "../contexts/EthContext/useEth";


const Mint = () => {
    const { state: { contract, accounts, web3 } } = useEth();
    const [to, setTo]=useState('');
    const [amount, setAmount]=useState('');

    const onToChange = (evt)=>{
        setTo(evt.target.value);
   
    }

    const onAmountChange = (evt)=>{
        setAmount(evt.target.value)
        
    }
    const handleSend = async () =>{
       
          if (amount === "") {
            alert("Please enter a amount to send");
            return;
          }
          const newValue = parseInt(amount);
          const value2 = web3.utils.toWei(web3.utils.toBN(newValue), 'ether');
    
         contract.methods.transfer(to, value2).send({ from: accounts[0] })
        .on('transactionHash', function(hash){
            console.log('Transaction hash: ' + hash);
          })
          .on('confirmation', function(confirmationNumber, receipt){
            console.log('Confirmation number: ' + confirmationNumber);
            console.log('Receipt: ' + JSON.stringify(receipt));
          })
          .on('error', function(error){
            console.log('Error: ' + error.message);
          });
    }
    
    return (
        <div>
            <h1>Envoie de Tokens</h1>
            <div>
                <input type="text" placeholder='to'value={to} onChange={onToChange}/><br/>
                <input type="text" placeholder='amount' value={amount} onChange={onAmountChange}/><br/>
                <button onClick={handleSend}>Send</button>
            </div>
        <div>
          Test account : {accounts}
        </div>
        </div>
    );
};

export default Mint;