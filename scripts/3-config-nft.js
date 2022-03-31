import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xbb9bADFF2ee8e0227a53D05191305Ecfa17EB0BE");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Yummy Core Team",
        description: "DAO created for yummyDAO dev members!",
        image: readFileSync("scripts/assets/yummy.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();