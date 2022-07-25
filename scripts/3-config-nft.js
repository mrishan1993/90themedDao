import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const editionDrop = sdk.getEditionDrop("0xC004EBEB5bCd32c0e7DA1603b3C80d86c936bfA9");
(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Pikachu",
                description: "This NFT will give you membership to 90sThemedDAO",
                image: readFileSync("scripts/assets/pikachu.jpeg"),
            }
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (e) {
        console.error("failed to create the new NFT", e);
    }
})();