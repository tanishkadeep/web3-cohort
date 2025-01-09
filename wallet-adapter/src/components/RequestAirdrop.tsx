import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function RequestAirdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop() {
    if (!wallet.publicKey) {
      alert("Wallet not connected");
      return;
    }
    await connection.requestAirdrop(wallet.publicKey, 1 * LAMPORTS_PER_SOL);
    alert("Airdropped SOL to " + wallet.publicKey.toBase58());
  }

  return (
    <div>
      <br />
      <br />
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={requestAirdrop}>Request Airdrop</button>
    </div>
  );
}
