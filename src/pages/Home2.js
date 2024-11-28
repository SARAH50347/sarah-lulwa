import React, { useState } from "react";
import Nav from "../components/Nav";
const Home2 = () => {
  // Initial balance state
  const [balance, setBalance] = useState(0); // Starting balance of 1000
  const [amount, setAmount] = useState(""); // Amount to deposit or withdraw
  const [error, setError] = useState(""); // To store error messages
  const [isDeposit, setIsDeposit] = useState(true); // Toggle between deposit and withdraw

  const handleTransaction = () => {
    const transactionAmount = Number(amount);
    if (transactionAmount <= 0) {
      setError("Please enter a valid amount greater than zero.");
      return;
    }

    if (isDeposit) {
      // Deposit case
      setBalance((prevBalance) => prevBalance + transactionAmount);
    } else {
      // Withdraw case
      if (transactionAmount > balance) {
        setError("Insufficient funds.");
        return;
      }
      setBalance((prevBalance) => prevBalance - transactionAmount);
    }

    // Clear input and error messages
    setAmount("");
    setError("");
  };

  return (
    <>
      <Nav />

      <div className="bg-[#B1A8D5] min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
        <div className=" px-6 py-8 bg-[#7D6EA9] rounded-md shadow-lg m-20">
          <div className="bg-[#BDB8DB] text-white  flex items-center justify-center">
            <div>
              <div className="text-[#314455] max-w-3xl text-center m-10">
                <div></div>
                <h2 className="text-3xl text-white font-semibold mb-6">
                  Your available Balance:
                </h2>
                <p> {balance.toFixed(2)} KD</p>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="deposit"
                      checked={isDeposit}
                      onChange={() => setIsDeposit(true)}
                    />
                    Deposit
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="withdraw"
                      checked={!isDeposit}
                      onChange={() => setIsDeposit(false)}
                    />
                    Withdraw
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{ padding: "10px", width: "80%", margin: "10px 0" }}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                {/* Display error message if any */}
                <button
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-[#B1A8D5] transition-colors "
                  onClick={handleTransaction}
                  style={{ margin: "5px" }}
                >
                  {isDeposit ? "Deposit" : "Withdraw"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Usage

export default Home2;

// import React from "react";
// import logo from "../logo.png";
// const Home2 = () => {
//   return (
//     <div className="bg-[#BDB8DB] text-white min-h-screen flex items-center justify-center">
//       <div className="text-[#314455] max-w-3xl text-center m-10">
//         <div className="max-w-md w-full px-6 py-8 bg-[#7D6EA9] rounded-md shadow-lg m-20">
//           <h2 className="text-3xl text-white font-semibold mb-6">
//             Your available Balance:
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home2;
