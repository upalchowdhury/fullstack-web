import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import axios from 'axios';
import { useCount, useContractMethod } from "../../hooks/index";
import { utils } from "ethers";

export default function Count() {
  
  const count = useCount();

  const { state, send: incrementCount } = useContractMethod("incrementCount");

  const { state: setCountState, send: setCount } =
    useContractMethod("setCount");

  const { state: twoVariablesState, send: setTwoVariables } =
    useContractMethod("takeTwoVariables");

  const [input, setInput] = useState("");
  const [value, setValue] = useState("");
  
  function generate(){
        axios.post("/predict", {"digit": value})
        .then((response) => {
          console.log(response);
         // document.getElementsByClassName("sentiment-text")[0].innerText = response["data"]["sentiment"];
        })
        .catch((err) => {
          console.log(err);
          //document.getElementsByClassName("sentiment-text")[0].innerText = "Error"
        });
      
  }
  
  function handleIncrement() {
    incrementCount();
    if (incrementCount()!==false){generate()};
    
   
        // if (incrementCount()!==false);
        // console.log(incrementCount())
        }
  

  function handleSetCount() {
    const _count = parseInt(input);
    if (_count) {
      setCount(_count);
    }
  }


  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="8xl">
        {count }
        
      </Text>
      <Button colorScheme="teal" size="lg" onClick={handleIncrement}>
        GENERATENFT
      </Button>
      
    </Flex>
  );
}