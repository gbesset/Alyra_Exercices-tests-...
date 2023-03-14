import React, { useEffect, useState } from 'react';
import useEth from "../contexts/EthContext/useEth";
import Web3 from "web3";

const Account = () => {
    const { state: { contract, accounts } } = useEth();
    const [address, setAddress]=useState('');
    const [balance, setBalance]=useState('');
    const [balanceToken, setBalanceToken]=useState('');

    useEffect(() => {
        async function getBalance() {
        
            const bal = await contract.methods.balanceOf(accounts[0]).call({ from: accounts[0] })
            setAddress(accounts[0])
            //setBalance(Web3.utils.fromWei(bal, 'ether'));
            setBalance(bal);
            //contract address 0x60266f9E7eA8dd8a4594132Cdd3233afA1906AE8

            //const bal = await contract.methods.balanceOf(accounts[0]).call({ from: accounts[0] })
        }

        getBalance();
    }, [accounts]);



    return (
        <div>
            <p>Address : {address}</p>
            <p>Balance : {balance}</p>
            <p>Balance Token: {balanceToken}</p>
        </div>
    );
};

export default Account;     