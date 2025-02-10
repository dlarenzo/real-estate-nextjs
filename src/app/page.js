"use client";
import ListingItem from "@/components/ListingItem";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Features from "@/components/Features";
import ListingsHeader from "@/components/ListingsHeader";
import React from "react";

function RentListings() {
  const [rentListings, setRentListings] = React.useState(null);

  React.useEffect(() => {
    const fetchRentListings = async () => {
      try {
        const result = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/listing/get`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              type: "rent",
              limit: 4,
              order: "asc",
            }),
          }
        );
        const data = await result.json();
        setRentListings(data);
      } catch (error) {
        setRentListings({ title: "Failed to load listings" });
      }
    };

    fetchRentListings();
  }, []);

  if (!rentListings) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 ">
      {rentListings && rentListings.length > 0 && (
        <div className="mt-5">
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent places for rent
            </h2>
            <Link
              className="text-sm text-blue-800 hover:underline"
              href={"/search?type=rent"}
            >
              Create A Listing RESTARTING
            </Link>
          </div>
          <div className="flex flex-wrap gap-4">
            {rentListings.map((listing) => (
              <ListingItem listing={listing} key={listing.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div>
        {/* Features */}
        <Features />

        {/* Listings Header */}
        <Suspense fallback={<div>Loading...</div>}>
          <ListingsHeader />
        </Suspense>

        {/* User Created Listings */}
        <Suspense fallback={<div>Loading...</div>}>
          <RentListings />
        </Suspense>
      </div>
    </main>
  );
}
