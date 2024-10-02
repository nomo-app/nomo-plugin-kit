import { nomo } from "nomo-webon-kit";
import { NomoTest } from "../test-kit/nomo-test";

class SignTxCancel extends NomoTest {
  constructor() {
    super({
      name: "Sign Tx 1: Cancel",
      description:
        "Do NOT sign the transaction, instead click the back-button.",
    });
  }

  async run() {
    try {
      await nomo.signEvmTransaction({
        messageHex:
          "0x02f86c0125830f424085010ffe7d9282ea6094f1ca9cb74685755965c7458528a36934df52a3ef80b844095ea7b30000000000000000000000007561deaf4ecf96dc9f0d50b4136046979acdad3effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0",
      });
    } catch (e: any) {
      const eObject = JSON.parse(e);
      if (
        !!eObject.nomoSignEvmTransaction &&
        eObject.nomoSignEvmTransaction.includes("the user did not authorize the EVM transaction")
      ) {
        return; // pass
      } else {
        throw e;
      }
    }
    throw new Error("The tester did not cancel the tx-signing");
  }
}

class SignTxERC20Staking extends NomoTest {
  constructor() {
    super({
      name: "Sign Tx 2: AVINOC-ERC20 Approval",
      description: "Simulate an approval for AVINOC-ERC20 staking.",
    });
  }

  async run() {
    const res = await nomo.signEvmTransaction({
      messageHex:
        "0x02f86c0125830f424085010ffe7d9282ea6094f1ca9cb74685755965c7458528a36934df52a3ef80b844095ea7b30000000000000000000000007561deaf4ecf96dc9f0d50b4136046979acdad3effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0",
    });
    if (res.sigHex.length !== 130) {
      throw new Error("sigHex length mismatch");
    }
  }
}

class SignTxZEN20Claiming extends NomoTest {
  constructor() {
    super({
      name: "Sign Tx 3: AVINOC-ZEN20 Claiming",
      description: "Simulate a claim of AVINOC-ZEN20 from a staking-NFT.",
    });
  }

  async run() {
    const res = await nomo.signEvmTransaction({
      messageHex:
        "0xf89182017c8502540be400830249f09497f51ecdeedecdb740dd1ff6236d013afff0417d80b8646ba4c13800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000003b9b1bb28559454e49518080",
    });
    if (res.sigHex.length !== 130) {
      throw new Error("sigHex length mismatch");
    }
  }
}

class SignTxUniswap extends NomoTest {
  constructor() {
    super({
      name: "Sign Tx 4: Uniswap",
      description: "Simulate a swapping of ETH into AVINOC-ERC20.",
    });
  }

  async run() {
    const res = await nomo.signEvmTransaction({
      messageHex:
        "0x02f903f40125830f424084d2552da2830a399e943fc91a3afd70395cd496c647d5a6cc9d4b2b7fad87071afd498d0000b903c43593564c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000066deb9ab00000000000000000000000000000000000000000000000000000000000000040b000604000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000071afd498d00000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000071afd498d0000000000000000000000000000000000000000000000000005a89d57609f0d505800000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002bc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000bb8f1ca9cb74685755965c7458528a36934df52a3ef0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f1ca9cb74685755965c7458528a36934df52a3ef000000000000000000000000000000fee13a103a10d593b9ae06b3e05f2e7e1c00000000000000000000000000000000000000000000000000000000000000190000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f1ca9cb74685755965c7458528a36934df52a3ef0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000005a89d57609f0d5058c0",
    });
    if (res.sigHex.length !== 130) {
      throw new Error("sigHex length mismatch");
    }
  }
}

export const signTxTests: Array<NomoTest> = [
  new SignTxCancel(),
  new SignTxERC20Staking(),
  new SignTxZEN20Claiming(),
  new SignTxUniswap(),
];