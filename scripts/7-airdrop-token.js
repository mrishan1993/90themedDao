import sdk from "./1-initialize-sdk.js"

const editionDrop = sdk.getEditionDrop("0xC004EBEB5bCd32c0e7DA1603b3C80d86c936bfA9");
const token = sdk.getToken("0xd3E1501cbfb686679B1ee96255798F253a4416BB");

(async () => {
    try { 
        const walletAddress = await editionDrop.history.getAllClaimerAddresses(0);
        if (walletAddress.length === 0 ) {
            console.log(
                "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
              );
            process.exit(0);
        } 
        const airdropTargets = walletAddress.map( (address) => {
            const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
            console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

            const airdropTarget = {
                toAddress: address,
                amount: randomAmount
            };
            return airdropTarget;
        });
        console.log("🌈 Starting airdrop...");
        await token.transferBatch(airdropTargets);
    } catch (e) {
        console.error("Failed to airdrop tokens", err);
    }
})();