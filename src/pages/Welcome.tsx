import React, { useState } from "react";
import Login from "../components/page-content/welcome/Login";

type Props = {};

const Welcome = (props: Props) => {
  const [signInOpen, setSignInOpen] = useState<Boolean>(false);
  const liteGrayCity = "font-bold text-zinc-400 mr-2";
  const grayCity = "font-bold text-zinc-500 mr-2";
  return (
    <div className="flex">
      <div className="h-full w-7/12">
        <div className="ml-auto mt-24 h-full w-[680px] pr-16">
          <div className=" flex h-full flex-row justify-between ">
            <img src="/img/swiggy-logo.svg" alt="logo" className="h-16 w-48" />
            <div className="flex flex-row">
              <h1
                className="my-auto cursor-pointer px-8 font-semibold hover:text-orange-500"
                onClick={() => setSignInOpen(true)}
              >
                Login
              </h1>
              <button className="p-auto my-auto h-[45px] w-28 bg-black text-base font-bold text-white">
                Sign Up
              </button>
            </div>
          </div>
          <h1 className="mt-20 text-4xl font-bold text-gray-800">
            Cooking gone wrong?
          </h1>
          <h2 className="mt-3 text-2xl text-zinc-600">
            Order food from favourite restaurants near you.
          </h2>
          <input
            type="text"
            className="mt-12 w-8/12 border border-gray-400 p-4 font-semibold text-gray-600 placeholder-gray-500"
            placeholder="Enter your delivery location"
          />
          <button className="w-36 border border-orange-500 bg-orange-500 p-4 font-bold text-white">
            FIND FOOD
          </button>
          <h1 className="text-medium font-sm mt-8 text-zinc-400">
            POPULAR CITIES IN INDIA
          </h1>
          <h1 className="mt-3 flex w-full flex-wrap">
            <span className={grayCity}>Ahmedabad</span>
            <span className={liteGrayCity}>Bangalore</span>
            <span className={grayCity}>Chennai</span>
            <span className={liteGrayCity}>Delhi</span>
            <span className={grayCity}>Gurgaon</span>
            <span className={liteGrayCity}>Hyderabad</span>
            <span className={grayCity}>Kolkata</span>
            <span className={liteGrayCity}>Mumbai</span>
            <span className={grayCity}>Pune</span>
            <span className={liteGrayCity}>& more.</span>
          </h1>
        </div>
      </div>
      <img
        src="/img/pizza-food.jpg"
        alt="wall"
        className="h-screen w-5/12 object-cover"
      />
      {signInOpen && <Login onClose={() => setSignInOpen(false)} />}
    </div>
  );
};

export default Welcome;
