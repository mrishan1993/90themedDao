import sdk from "./1-initialize-sdk.js"

const vote = sdk.getVote("0xFeF4b9dc9A4E3b54787466f9A5d42Ec0B0955D26");
const token = sdk.getToken("0xd3E1501cbfb686679B1ee96255798F253a4416BB");
(async () => {
    try {
        await token.roles.grant("minter", vote.getAddress());
        console.log(
            "Successfully gave vote contract permissions to act on token contract"
        );
    } catch (e) {
        console.error(
            "failed to grant vote contract permissions on token contract",
            e
          );
        process.exit(1);
    }
    try {
        const ownedTokenBalance = await token.balanceOf(
            process.env.WALLET_ADDRESS
        )

        const ownedAmount = ownedTokenBalance.displayValue;
        const percent90 = Number(ownedAmount) * 90 / 100 ;
        await token.transfer(
            vote.getAddress(),
            500
        )
        console.log("✅ Successfully transferred " + percent90 + " tokens to vote contract");
    } catch (err) {
        console.error("failed to transfer tokens to vote contract", err);
      }
})();