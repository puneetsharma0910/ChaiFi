import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img
          className="w-full object-cover h-[350]"
          src="/banner1.gif"
          alt=""
        />
      </div>
      <div className="absolute right-[46%] bottom-40 rounded-full">
        <img
          className="rounded-full transition-all"
          width={150}
          height={150}
          src="/giphy.webp"
          alt=""
        />
      </div>
      <div className="username flex flex-col justify-center items-center mt-24 gap-2 pr-9">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-300">Creating Animated art for VTT's</div>
        <div className="text-slate-300">
          16,893 members 96 posts $17,100/release
        </div>
      </div>
      <div className="payment flex gap-3  w-auto pr-20 pl-20 mt-14 mb-14 ">
        <div className="supporters bg-slate-900 w-1/2 text-white p-4 rounded-lg">
          <h2 className="font-bold text-2xl my-5">Supporters</h2>
          <ul className="mx-5">
            <li className="my-2 flex gap-2 items-center">
              <img width={33} src="avatar.gif" alt="" />
              Rahul donated <span className="font-bold">$30</span>,said all the
              best
            </li>
            <li className="my-2 flex gap-2 items-center">
              <img width={33} src="avatar.gif" alt="" />
              Rahul donated <span className="font-bold">$30</span>,said all the
              best
            </li>
            <li className="my-2 flex gap-2 items-center">
              <img width={33} src="avatar.gif" alt="" />
              Rahul donated <span className="font-bold">$30</span>,said all the
              best
            </li>
            <li className="my-2 flex gap-2 items-center">
              <img width={33} src="avatar.gif" alt="" />
              Rahul donated <span className="font-bold">$30</span>,said all the
              best
            </li>
            <li className="my-2 flex gap-2 items-center">
              <img width={33} src="avatar.gif" alt="" />
              Rahul donated <span className="font-bold">$30</span>,said all the
              best
            </li>
          </ul>
        </div>
        <div className="makePayment  bg-slate-900 w-1/2 text-white p-4 rounded-lg">
          <h2 className="my-5 text-2xl font-bold">Make a Payment</h2>
          <div className="flex gap-3 m-2">
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Name"
            />
          </div>
          <div className="flex gap-3 m-2">
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Message"
            />
          </div>
          <div className="flex gap-3 m-2">
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Amount"
            />
          </div>
          <div className="flex gap-3 m-2 w-[99%]">
            <button className="text-white w-[100%] bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 ">
              Pay
            </button>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="bg-slate-800 p-3 rounded-lg">Pay 10$</button>
            <button className="bg-slate-800 p-3 rounded-lg">Pay 20$</button>
            <button className="bg-slate-800 p-3 rounded-lg">Pay 30$</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
