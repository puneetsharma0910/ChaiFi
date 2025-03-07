import Image from "next/image";
<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> main

export default function Home() {
  return (
    <>
<<<<<<< HEAD
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
=======
      <div className="flex justify-center flex-col gap-4 items-center text-white h-[44vh] px-5 md:px-0 text-xs md:text-base  ">
        <div className="font-bold flex gap-6 md:gap-20 md:text-5xl justify-center items-center text-3xl">Get Me a Chai <span><img className="invertImg" src="/tea.gif" width={88} alt="" /></span></div>
        <p className="text-center md:text-left">
          A crowdfunding platform for creators to fund their projects. 
          
        </p>
        <p className="text-center md:text-left">

          A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.
        </p>
        <div>
          <Link href={"/login"}>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>

          <Link href="/about">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>

        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
      <p className="font-bold text-center">Fans want to contribute</p>
      <p className="text-center">Your fans are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
      <p className="font-bold text-center">Fans want to collaborate</p>
      <p className="text-center">Your fans are ready to collaborate with you</p>
    </div>
  </div>
</div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
      
>>>>>>> main
      </div>
    </>
  );
}
