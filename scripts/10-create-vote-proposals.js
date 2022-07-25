import sdk from "./1-initialize-sdk.js";
import {ethers} from "ethers";
import { exec } from "child_process";

const vote = sdk.getVote("0xFeF4b9dc9A4E3b54787466f9A5d42Ec0B0955D26");
const token = sdk.getToken("0xd3E1501cbfb686679B1ee96255798F253a4416BB");

(async () => {
    try {
        const amount = 420_000;
        const desc = "Should the DAO mint an additional " + amount + " tokens into the treasury?";
        const executions = [
            {
                toAddress: token.getAddress(),
                nativeTokenValue: 0,
                transactionData: token.encoder.encode(
                    "mintTo", [
                        vote.getAddress(),
                        ethers.utils.parseUnits(amount.toString(),18)
                    ]
                )
            }
        ]
        await vote.propose(desc, executions)
        console.log("✅ Successfully created proposal to mint tokens");
    } catch (e) {
        console.error("failed to create first proposal", e);
        process.exit(1);
    }
    try {
        const amount = 6_900;
        const desc = "Should the DAO transfer " + amount + " tokens from the treasury to " + process.env.WALLET_ADDRESS + " for being awesome?";
        const executions = [
            {
                nativeTokenValue: 0,
                transactionData: token.encoder.encode (
                    "transfer",
                    [
                        process.env.WALLET_ADDRESS,
                        ethers.utils.parseUnits(amount.toString(), 18)
                    ]
                ),
                toAddress: token.getAddress
            }
        ];
        await vote.propose(desc, executions);
        console.log(
            "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!");
    } catch (error) {
        console.error("failed to create second proposal", error);
    }
})();