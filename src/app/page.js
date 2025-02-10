import ListingItem from "@/components/ListingItem";

import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Features";

export default async function Home() {
  let rentListings = null;
  try {
    const result = await fetch(process.env.URL + "/api/listing/get", {
      method: "POST",
      body: JSON.stringify({
        type: "rent",
        limit: 4,
        order: "asc",
      }),
      cache: "no-store",
    });
    const data = await result.json();
    rentListings = data;
  } catch (error) {
    rentListings = { title: "Failed to load listings" };
  }
  let saleListings = null;
  try {
    const result = await fetch(process.env.URL + "/api/listing/get", {
      method: "POST",
      body: JSON.stringify({
        type: "sale",
        limit: 4,
        order: "asc",
      }),
      cache: "no-store",
    });
    const data = await result.json();
  } catch (error) {
    saleListings = { title: "Failed to load listings" };
  }
  let offerListings = null;
  try {
    const result = await fetch(process.env.URL + "/api/listing/get", {
      method: "POST",
      body: JSON.stringify({
        offer: true,
        limit: 4,
        order: "asc",
      }),
      cache: "no-store",
    });
    const data = await result.json();
    offerListings = data;
  } catch (error) {
    offerListings = { title: "Failed to load listings" };
  }
  return (
    <div className="">
      <div className="bg-[url('/img/hero/hero-bg.jpg')] bg-center bg-cover flex flex-col items-center justify-center text-white  sm:px-20 sm:py-56 lg:p-56 relative w-full max-h-5/6 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-2"></div>
        <div className="flex flex-col items-start gap-6 max-w-6xl mx-auto my-20 px-5 py-10 relative z-5">
          <h1 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl">
            Find your next <span className="text-yellow-400">perfect</span>{" "}
            place with ease{" "}
          </h1>
          <div className=" text-xl text-semibold">
            Home Realty is the best place to find your next home. <br />
            We have a wide variety of listings to suit your needs. Whether
            you&apos;re looking to rent, buy, or find special offers, we have
            something for everyone.
          </div>
          <Link
            href={"/search"}
            className="text-xs sm:text-sm text-white font-bold hover:underline bg-yellow-500 px-10 py-5 rounded-lg"
          >
            Let&apos;s start looking...
          </Link>
        </div>
      </div>

      {/* Features */}
      <Features />

      {/* Listings Header */}
      <div>
        <div className="bg-[url('/img/listing/listing-bg.webp)] bg-center bg-cover mb-10 text-center py-5">
          <div className="my-5 py-5">
            <h2 className="text-5xl font-semibold text-yellow-400 text-center">
              Listings
            </h2>
            <p className="text-3xl my-5">
              Check out the listings you have added below!!!YAY
            </p>
          </div>
          <div className="my-5 py-5">
            <Link
              href={"/create-listing"}
              className="text-xs sm:text-sm text-white font-bold hover:underline bg-yellow-500 mb-5 px-10 py-5 rounded-lg"
            >
              Create A Listing
            </Link>
          </div>
        </div>
      </div>

      {/* User Created Listings */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 ">
        {offerListings && offerListings.length > 0 && (
          <div className="mt-5">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                href={"/search?offer=true"}
              >
                Show more listings
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing.id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-yellow-400">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-white hover:underline"
                href={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing.id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-yellow-400">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-white hover:underline"
                href={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
