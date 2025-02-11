import React from "react";
import ServicesCard from "./ServicesCard";
import {
  FaBuffer,
  FaHouseFlag,
  FaPeopleRoof,
  FaPen,
  FaMoneyCheckDollar,
  FaBuildingColumns,
} from "react-icons/fa6";

export default function Services() {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-5">
        <div>
          <h2 className="text-5xl pb-10 font-semibold text-yellow-500">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServicesCard
            title="Property Management"
            description="Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer."
            icon={FaBuffer}
          />
          <ServicesCard
            title="Home Buying"
            description="We provide a range of services to property owners and landlords to help them effectively manage their real estate investments."
            icon={FaHouseFlag}
          />
          <ServicesCard
            title="Consulting Service"
            description="A team of professionals to advice and expertise to individuals, businesses, or organizations involved in various aspects of the real estate industry."
            icon={FaPeopleRoof}
          />
          <ServicesCard
            title="Mortgage Service"
            description="We offer a range of financial and administrative activities involved in obtaining a mortgage loan to purchase or refinance real estate."
            icon={FaPen}
          />
          <ServicesCard
            title="Home Selling"
            description="Whether you are an individual homeowner, real estate investor, we assist in marketing, selling, and closing the sale of your property."
            icon={FaMoneyCheckDollar}
          />
          <ServicesCard
            title="Escrow Service"
            description="We are serving as a neutral third party that facilitates the closing process and ensures that the terms and conditions of the sale are met.."
            icon={FaBuildingColumns}
          />
        </div>
      </div>
    </div>
  );
}
