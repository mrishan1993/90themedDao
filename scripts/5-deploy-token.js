import {AddressZero} from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js"

(async () => {
    try {
        const tokenAddress = await sdk.deployer.deployToken({
            name: "90Themed Governance Token",
            symbol: "NIN",
            primary_sale_recipient: AddressZero
        })
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenAddress,
          );
    } catch (e) {
        console.error("failed to deploy token module", e);
    }
})();