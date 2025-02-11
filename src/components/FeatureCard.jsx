import React from "react";

export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <div>
      <div className="">
        <div className="feature-card-icon">
          <Icon className="text-yellow-500 my-2" size={48} />
        </div>
        <div>
          <h3 className="text-yellow-500 f text-2xl pb-5">{title}</h3>
          <p className="pb-5">{description}</p>
        </div>
      </div>
    </div>
  );
}
