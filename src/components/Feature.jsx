import React from "react";
import { FaLock, FaRegSmile, FaRocket } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-14 flex  lg:flex-row flex-col gap-8">
      {/* Features Explanation */}
      <div className="w-full lg:w-[45%]">
        <h2 className="text-5xl pb-5 font-semibold text-yellow-500">
          Why Home Realty?
        </h2>
        <p className="text-lg text-slate-100">
          Home Realty is the best place to find your dream home. Here are some
          reasons why you should use Home Realty.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 lg:mt-0">
        <FeatureCard
          title="Easy to use"
          description="Home Realty is easy to use and navigate. Find your dream home with ease."
          icon={FaRegSmile}
        />
        <FeatureCard
          title="Secure"
          description="We take security seriously. Your data is safe with us."
          icon={FaLock}
        />
        <FeatureCard
          title="Fast"
          description="Find your dream home in seconds. No more waiting."
          icon={FaRocket}
        />
        <FeatureCard
          title="Easy Financing"
          description="Get financing for your new home with ease."
          icon={FaMoneyBill}
        />
      </div>
    </div>
  );
}
