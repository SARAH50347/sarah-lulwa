import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { transaction } from "../api/auth";
const Transaction = () => {
  const { user } = transaction();
  const {
    data: transactionsData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["transaction"],
    queryFn: transaction,
  });

  if (isLoading) return <div>Loading transactions...</div>;
  if (error) return <div>Error fetching transactions: {error.message}</div>;

  return (
    <>
      <Nav />
      <div className="bg-[#B1A8D5] ">
        <div className="m-5 p-4">
          <h2 className="text-xl font-bold">Transaction History</h2>
          {transactions.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Date
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Type
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Amount
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Balance after Transaction
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transactionsData, index) => (
                  <tr
                    key={transactionsData.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(
                        transactionsData.createdAt
                      ).toLocaleDateString()}
                    </td>
                    <td
                      className={`border border-gray-300 px-4 py-2 ${
                        transaction.type === "Deposit"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {transactionsData.type}
                    </td>
                    <td
                      className={`border border-gray-300 px-4 py-2 ${
                        transaction.type === "Deposit"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      ${transactionsData.amount.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ${transactionsData.balanceAfter.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Transaction;
