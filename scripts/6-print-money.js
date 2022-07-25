import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xd3E1501cbfb686679B1ee96255798F253a4416BB");
(async () => {
    try {
        const amount = 10000 ;
        await token.mint(amount);
        const totalSupply = await token.totalSupply();
        console.log("✅ There now is", totalSupply.displayValue, "$NIN in circulation");
    } catch (e) {
        console.error("Failed to print money", e);
    }
})();