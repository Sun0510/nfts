import { run } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const tokenURIs = [
    process.env.IPFS_ADDRESS_1!,
    process.env.IPFS_ADDRESS_2!,
    process.env.IPFS_ADDRESS_3!,
    process.env.IPFS_ADDRESS_4!,
    process.env.IPFS_ADDRESS_5!,
    process.env.IPFS_ADDRESS_6!,
    process.env.IPFS_ADDRESS_7!,
    process.env.IPFS_ADDRESS_8!,
    process.env.IPFS_ADDRESS_9!,
    process.env.IPFS_ADDRESS_10!,
    process.env.IPFS_ADDRESS_11!,
    process.env.IPFS_ADDRESS_12!,
    process.env.IPFS_ADDRESS_13!,
    process.env.IPFS_ADDRESS_14!,
    process.env.IPFS_ADDRESS_15!,
    process.env.IPFS_ADDRESS_16!,
    process.env.IPFS_ADDRESS_17!,
    process.env.IPFS_ADDRESS_18!,
    process.env.IPFS_ADDRESS_19!,
    process.env.IPFS_ADDRESS_20!,
  ];

  await run("verify:verify", {
    address: "0x036a7b9e3549648815C80c569F7aB71B90753689", // 배포된 NFT 컨트랙트 주소
    constructorArguments: [tokenURIs],
  });

  console.log("Verification submitted. Check Etherscan.");
}

main().catch((err) => {
  console.error(err);
});
