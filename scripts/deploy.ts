import { ethers, run } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const [deployer] = await ethers.getSigners();

  const tokenURIs: string[] = [
    process.env.IPFS_ADDRESS_1 || "",
    process.env.IPFS_ADDRESS_2 || "",
    process.env.IPFS_ADDRESS_3 || "",
    process.env.IPFS_ADDRESS_4 || "",
    process.env.IPFS_ADDRESS_5 || "",
    process.env.IPFS_ADDRESS_6 || "",
    process.env.IPFS_ADDRESS_7 || "",
    process.env.IPFS_ADDRESS_8 || "",
    process.env.IPFS_ADDRESS_9 || "",
    process.env.IPFS_ADDRESS_10 || "",
    process.env.IPFS_ADDRESS_11 || "",
    process.env.IPFS_ADDRESS_12 || "",
    process.env.IPFS_ADDRESS_13 || "",
    process.env.IPFS_ADDRESS_14 || "",
    process.env.IPFS_ADDRESS_15 || "",
    process.env.IPFS_ADDRESS_16 || "",
    process.env.IPFS_ADDRESS_17 || "",
    process.env.IPFS_ADDRESS_18 || "",
    process.env.IPFS_ADDRESS_19 || "",
    process.env.IPFS_ADDRESS_20 || ""
  ];

  if (tokenURIs.some((t) => t === "")) {
    throw new Error("One or more IPFS_* env vars are missing. Fill all 20 IPFS_* values in .env");
  }

  const Factory = await ethers.getContractFactory("SHINUNFT");
  const nft = await Factory.deploy(tokenURIs);
  await nft.deployed();

  console.log("SHINUNFT deployed at:", nft.address);

  for (let i = 0; i < tokenURIs.length; i++) {
    const tx = await nft.mint();
    await tx.wait();
    console.log(`Minted tokenId ${i}`);
  }

  console.log("Verifying on Etherscan...");
  try {
    await run("verify:verify", {
      address: nft.address,
      constructorArguments: [tokenURIs],
    });
    console.log("Verified on Etherscan");
  } catch (err: any) {
    console.error("Etherscan verification failed:", err.message || err);
    console.log("You can retry manually with: npx hardhat verify --network sepolia <address> '<json-array-string>'");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
