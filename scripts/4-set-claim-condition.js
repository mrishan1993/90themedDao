import sdk from "./1-initialize-sdk.js";
import {MaxUint256} from "@ethersproject/constants";

const editionDrop = sdk.getEditionDrop("0xC004EBEB5bCd32c0e7DA1603b3C80d86c936bfA9");

(async () => {
    try {
        const claimConditions = [{
            startTime: new Date(),
            maxQuantity: 50_000,
            price: 0,
            quantityLimitPerTransaction: 1,
            waitInSeconds: MaxUint256
        }];
        await editionDrop.claimConditions.set("0", claimConditions);
        console.log("✅ Successfully set claim condition!")
    } catch (e) {
        console.error("Failed to set claim condition", e);
    }
})();