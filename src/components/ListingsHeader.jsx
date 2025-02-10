"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ListingsHeader() {
  const searchParams = useSearchParams();

  return (
    <div>
      <div className="bg-[url('/img/listing/listing-bg.webp)] bg-center bg-cover mb-10 text-center py-5">
        <div className="my-5 py-5">
          <h2 className="text-5xl font-semibold text-yellow-400 text-center">
            Listings
          </h2>
          <p className="text-3xl my-5">
            Check out the listings you have added below!!!YAY CRYING NOW. NEW
            FILE. UPDATE. AGAIN. BRUH.FINGERS CROSSED. TRYING
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
  );
}
