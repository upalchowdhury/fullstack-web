import { useEthers } from "@usedapp/core"
import Config from "../../config.json"
import networkMapping from "../../build/deployments/map.json"
import { constants } from "ethers"
import { makeStyles } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.common.white,
        textAlign: "center",
        padding: theme.spacing(4)
    }
}))

export const Main = () => {

    const classes = useStyles()
    const { chainId, error } = useEthers()
    const networkName = chainId ? Config[chainId] : "ganache"
    let stringChainId = String(chainId)
    const TokenAddress = chainId ? networkMapping[stringChainId]["Nft"][0] : constants.AddressZero
    
    return (<>
        <h2 className={classes.title}>Generate NFT</h2>
       <p> Step 1. Generate images using GENERATENFT </p>
          <p> Step 2. Mint it using MINT </p>
    </>)
}