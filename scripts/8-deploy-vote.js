import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const voteContractAddress = await sdk.deployer.deployVote ({
            name: "My amazing DAO",
            voting_token_address: "0xd3E1501cbfb686679B1ee96255798F253a4416BB",
            voting_delay_in_blocks: 0,
            voting_period_in_blocks: 6570,
            voting_quorum_fraction: 0,
            proposal_token_threshold: 0
        })
        console.log(
            "✅ Successfully deployed vote contract, address:",
            voteContractAddress,
        );
    } catch(e) {
        console.error("Failed to deploy vote contract", e);
    }
})();