import React from "react";
import Link from "next/link";

export default function ServicesCard({ title, description, icon: Icon }) {
  return (
    <div className="border border-gray-200 p-5 rounded-lg">
      <div className="">
        <div className="feature-card-icon py-3">
          <Icon className="text-yellow-500 my-2" size={48} />
        </div>
        <div>
          <h3 className="text-yellow-500 f text-2xl pb-5 font-semibold">
            {title}
          </h3>
          <p className="pb-5 text-lg">{description}</p>
        </div>
        <div className="my-9">
          <Link
            href={"/"}
            className="text-xs sm:text-sm text-white font-bold hover:underline bg-yellow-500 px-10 py-5 rounded-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
