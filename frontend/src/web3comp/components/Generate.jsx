import React, { useState, useEffect } from "react"
import { Token } from "../Main"
import { useEthers, useTokenBalance, useNotifications } from "@usedapp/core"
import { formatUnits } from "@ethersproject/units"
import { Button, Input, CircularProgress, Snackbar } from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import { generateNFT } from "../../hooks"
import { utils } from "ethers"




export const Generate = () => {

//const [amount, setAmount] = useState(0)


const { approve, State} = generateNFT()

const handleGenerate = () => {
    //const amountAsWei = utils.parseEther(amount.toString())
    return approve()

}


    return (

        <>
            <Button
            onClick={handleGenerate}
                color="primary"
                size="large"
            >
                Generate
            </Button>

        </>
    )


}