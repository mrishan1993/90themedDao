import sdk from "./1-initialize-sdk.js"

const token = sdk.getToken("0xd3E1501cbfb686679B1ee96255798F253a4416BB");

(async () => {
    try {
        const allRoles = await token.roles.getAll();
        console.log("👀 Roles that exist right now:", allRoles);
        await token.roles.setAll({admin: [], minter: []});
        console.log(
            "🎉 Roles after revoking ourselves",
            await token.roles.getAll()
        );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
    } catch(e) {
        console.error("Failed to revoke ourselves from the DAO trasury", e);
    }
})();