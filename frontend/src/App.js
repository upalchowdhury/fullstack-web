import React, {useState,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from 'semantic-ui-react';

import { ethers } from "ethers";
import {DAppProvider, ChainId} from "@usedapp/core"
import {Header} from "./web3comp/components/Header"
import {Main} from "./web3comp/components/Main"
import { useCount, useContractMethod } from "./hooks/index";
//import {Count} from "./web3comp/components/SendTransaction"

import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Count from "./web3comp/components/SendTransaction";
import {Mint} from "./web3comp/components/Mint";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <DAppProvider config = {{
             supportedChains: [ChainId.Rinkeby]
           }}>
                  <Header/>
              <ChakraProvider>
      
                  <Count />
                   <Mint />
    
              </ChakraProvider>
                   <Main/>
    </DAppProvider>
  );
}

export default App;

