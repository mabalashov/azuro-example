import './App.css';
import {
  setContractAddresses,
  configure,
  setWalletProvider,
  fetchAllowance,
} from '@azuro-protocol/sdk';
import { Web3Provider } from "@ethersproject/providers";
import { useEffect, useState } from "react";
const Web3 = require('web3');


function App() {
  const [allowance, setAllowance] = useState(0);
  const [library, setLibrary] = useState(null);

  useEffect(() => {
    (async () => {
      const library = new Web3Provider(Web3.currentProvider);

      await setContractAddresses({
        core: '0x4fE6A9e47db94a9b2a4FfeDE8db1602FD1fdd37d',
        lp: '0xac004b512c33D029cf23ABf04513f1f380B3FD0a',
        bet: '0xFd9E5A2A1bfc8B57A288A3e12E2c601b0Cc7e476',
        token: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      });

      await configure({
        rpcUrl: 'https://rpc.xdaichain.com/',
        ipfsGateway: 'https://ipfs-gateway.azuro.org/ipfs/',
      });

      await setWalletProvider(library);

      setLibrary(library);
    })()
  }, []);

  useEffect(() => {
    (async () => {
      // const allowance = await fetchAllowance(account);

      // setAllowance(allowance);
    })()
  }, [library]);

  return (
    <div className="App">
      {allowance}
    </div>
  );
}

export default App;
