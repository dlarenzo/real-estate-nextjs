// SERVER SIDE SO NO HOOKS ALLOWED HERE
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
} from "react-icons/fa";

// WE USE ASYNC FUNCTIONS TO FETCH DATA AND PASS IT TO THE COMPONENT VIA PARAMS
export default async function Listing({ params }) {
  let listing = null;
  try {
    const result = await fetch(process.env.URL + "/api/listing/get", {
      method: "POST",
      body: JSON.stringify({ listingId: params.id }),
      cache: "no-store",
    });
    const data = await result.json();
    listing = data[0];
  } catch (error) {
    listing = { title: "Failed to load listing" };
  }
  if (!listing || listing.name === "Failed to load listing") {
    return (
      <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
        <h2>Listing Not Found!</h2>
      </main>
    );
  }

  // SHOW THE LISTING
  if (listing && listing.name !== "Failed to load listing") {
    return (
      <main>
        <div>
          {/* BACKGROUND IMAGE */}
          <img
            src={listing.imageUrls[0]}
            alt={listing.name}
            className="w-full h-[400px] object-cover"
          />
          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl font-semibold ">
              {listing.name} - ${" "}
              {listing.offer
                ? listing.discountPrice.toLocaleString("en-US")
                : listing.regularPrice.toLocaleString("en-US")}
              {listing.type === "rent" && " / Month"}
            </p>
            <p className="flex items=center mt-6 gap-2 text-slate-600 text-sm">
              <FaMapMarkerAlt className="text-green-700" />
              {listing.address}
            </p>
            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listing.type === "rent" ? "For Rent" : "For Sale"}
              </p>
              {listing.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                  $(+listing.regularPrice - listing.discountPrice) OFF
                </p>
              )}
            </div>
            <p className="text-slate-100">
              <span className="font-semibold text-white">Description - </span>
              {listing.description}
            </p>
            <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaBath className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No parking spot"}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap">
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Not Furnished"}
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}
