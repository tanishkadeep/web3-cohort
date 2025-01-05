import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const Airdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendAirdrop() {
    if (!wallet.connected || !wallet.publicKey) {
      alert("Please connect your wallet.");
      return;
    }

    try {
      await connection.requestAirdrop(wallet.publicKey, 1000000000);
      alert("Airdrop successful!");
      const balance = await connection.getBalance(wallet.publicKey);
      console.log("Balance:", balance);
    } catch (error) {
      console.error("Airdrop failed:", error);
      alert("Airdrop failed. Please check your connection or try again later.");
    }
  }

  return (
    <div>
      <input type="number" placeholder="Amount" className="border-2 mr-4" />
      <button className="border-2" onClick={sendAirdrop}>
        Airdrop
      </button>
    </div>
  );
};

export default Airdrop;
