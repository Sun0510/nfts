import { ethers } from "hardhat";

async function main() {
  // 이미 배포된 컨트랙트 주소
  const contractAddress = "0x3ab7E2c39eCB13b0d46f6bd626596B9b8a690fBb";

  // SHINUNFT 컨트랙트 ABI 가져오기
  const SHINUNFT = await ethers.getContractFactory("SHINUNFT");
  const nft = SHINUNFT.attach(contractAddress);

  // 예: tokenId 0의 URI 확인
  const uri0 = await nft.tokenURI(0);
  console.log("TokenURI 0:", uri0);

  // 모든 토큰 URI 확인
  const total = await nft.nextTokenId();
  for (let i = 0; i < total; i++) {
    console.log(`TokenURI ${i}:`, await nft.tokenURI(i));
  }
}

main().catch((err) => console.error(err));
