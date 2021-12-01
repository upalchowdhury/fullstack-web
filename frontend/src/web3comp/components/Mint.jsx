import { useState } from "react";
import { useEthers,useContractFunction} from "@usedapp/core";
import axios from 'axios';
import IpfsHash from '../../ipfs.json'
import Web3 from 'web3';

import {
  Box,
  Flex,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

import { useCount, useContractMethod, NFTT } from "../../hooks/index";
import { utils } from "ethers";
import {pinJSONToIPFS} from "./pinata";
import { ethers, constants} from "ethers";
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

// const web3 = createAlchemyWeb3(alchemyKey);
const alurl = "wss://eth-rinkeby.alchemyapi.io/v2/NcbFVKC2EhqtMqGmhLi3H6t9247UbUJm"
//"https://eth-rinkeby.alchemyapi.io/v2/NcbFVKC2EhqtMqGmhLi3H6t9247UbUJm";

// Using web3js
const web3 = new Web3(alurl);


const contractAddress = "0x29fd72B24fD40D73a9537Fa66565018dB496Bd86";

const provider = new ethers.providers.Web3Provider(web3.currentProvider);

// There is only ever up to one account in MetaMask exposed
const signer = provider.getSigner();


export const  Mint = () => {

  const { account } = useEthers()


const { state: mintFunc, send: createNft } =
    useContractMethod("mint");

  async function handlemint() {
   const url = "https://gateway.pinata.cloud/ipfs/"
    const tokenUri = JSON.stringify(url+IpfsHash["IpfsHash"])
 
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    var tokenId= getRandomInt(1000)
    console.log("start")
    console.log(getRandomInt(1000))
    // increment()
    // console.log("incremented")
    if (account){
      console.log(contractAddress)
      console.log(account)
       console.log(tokenUri)
      // console.log(fullurl)
  var tx = await createNft(account,tokenId,tokenUri);
  console.log(tx)}
        }
       


  return (
    <Flex direction="column" align="center" mt="4">
      <Button colorScheme="teal" size="lg" onClick={handlemint}>
        MINT
      </Button>

    </Flex>
  );
}