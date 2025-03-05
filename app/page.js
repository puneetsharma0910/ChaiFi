import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[44vh] text-white">
        <div className="text-3xl font-bold flex justify-center items-center">
          Buy me a Chai{" "}
          <span>
            <Image width={55} height={55} src="/tea.gif" alt="Tea icon" />
          </span>
        </div>

        <div className="text-center">
          A Crowdfunding platform for creators - Get funded by fans and followers
        </div>

        <div className="flex m-5 gap-2">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white opacity-20 h-1 rounded-2xl"></div>

      <div className="text-white text-center mx-auto my-5">
        <h1 className="font-bold text-2xl">Your fans can buy you a Chai</h1>
        <div className="flex m-7 py-7 justify-around items-center">
          <div className="flex flex-col items-center">
            <Image
              className="bg-slate-300 rounded-full"
              width={65}
              height={65}
              src="/man.gif"
              alt="Fan support"
            />
            <p className="font-semibold">Fans love your work!</p>
            <p>Your supporters want to see you succeed.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="bg-slate-300 rounded-full"
              width={65}
              height={65}
              src="/coin.gif"
              alt="Coins donation"
            />
            <p className="font-semibold">Easily accept donations!</p>
            <p>Fans can contribute with just one click.</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="bg-slate-300 rounded-full mb-2"
              width={65}
              height={65}
              src="/group.gif"
              alt="Community support"
            />
            <p className="font-semibold">Build a community!</p>
            <p>Engage with supporters and grow together.</p>
          </div>
        </div>
      </div>
    </>
  );
}
