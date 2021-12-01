import {  ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useEthers,useContractCall, useContractFunction } from "@usedapp/core";
import { constants, utils } from "ethers"
import Collectible from "../build/contracts/Nft.json"
// import ERC721 from "../build/contracts/dependencies/OpenZeppelin/openzeppelin-contracts@3.4.0/ERC721.json"
// import networkMapping from "../build/deployments/map.json"
// import Web3 from 'web3';



const { abi } = Collectible
//const { chainId } = useEthers()
const collectibleAddress = "0x29fd72B24fD40D73a9537Fa66565018dB496Bd86"
//chainId ? networkMapping[String(chainId)]["Collectible"][0] : constants.AddressZero
const collectibleInterface = new utils.Interface(abi)
const mainContract = new Contract(collectibleAddress, collectibleInterface)

export function useCount() {
    
  const count =
    useContractCall({
      abi: abi,
      address: collectibleAddress,
      method: "count",
      args: [],
    }) ?? [];
  console.log(count);
  return count;
}

export function useIncrement() {
  const { state, send } = useContractFunction(mainContract, "incrementCount", {});
  return { state, send };
}

export function useSetCount() {
  const { state, send } = useContractFunction(mainContract, "setCount", {});
  return { state, send };
}

export function NFTT(){
  const { state, send: createNft } = useContractFunction(mainContract, "mint", {});
  return {state, createNft}
}

export function useContractMethod(methodName) {
  const { state, send } = useContractFunction(mainContract, methodName, {});
  return { state, send };
}
