import React, { useState } from "react";
import Input from "./Input.js";
import { useMutation } from "@tanstack/react-query";

const Modal = ({ show, setShowModal }) => {
  return;
  const [amount, setAmount] = useState("");
  const [username, setUsername] = useState("");

  const mutation = useMutation({
    mutationKey: ["whateverKey"],
    mutationFn: () => console.log(""),
    onSuccess: () => {
      console.log("Data submitted successfully");
    },
    onError: (error) => {
      console.error("Error submitting data:", error);
    },
  });

  const handleSubmit = () => {
    if (!amount || !username) {
      alert("Please fill out both fields.");
      return;
    }

    mutation.mutate({
      amount,
      username,
    });

    setAmount("");
    setUsername("");
    setShowModal(false);
  };

  if (!show) return null;

  return (
    <div className="inset-0 fixed flex justify-center items-center flex-col z-20 overflow-hidden">
      <div className="bg-black absolute z-0 opacity-70 inset-0"></div>
      <div className="relative z-10 flex flex-col gap-3 border-[3px] border-black rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[30%] bg-white pt-[50px]">
        <button
          className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
        <Input
          name="amount"
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          placeholder="Enter Amount"
        />
        <Input
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter Username"
        />
        <button
          className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;

// import React, { useState } from "react";
// import Input from "./Input";

// const Modal = ({ show, setShowModal }) => {
//   const [amount, setAmount] = useState("");
//   const [username, setUsername] = useState("");
//   const mutation = useMutation({

//   });

//   const handleSubmit = () => {
//     mutation.mutate({
//       amount: amount,
//       username: username,
//     });
//     setShowModal(false);
//   };

//   if (!show) return "";

//   return (
//     <div
//       className="inset-0 fixed  flex justify-center items-center flex-col z-20 overflow-hidden
//   "
//     >
//       <div className="bg-black absolute z-0 opacity-70 inset-0 "></div>
//       <div className="relative z-10 flex flex-col gap-3 border-[3px] border-black rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[30%] bg-white pt-[50px]">
//         <button
//           className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
//           onClick={() => {
//             setShowModal(false);
//           }}
//         >
//           Close
//         </button>
//         <Input
//           name="amount"
//           onChange={(e) => {
//             setAmount(e.target.value);
//           }}
//         />

//         <button className="w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-green-400">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
