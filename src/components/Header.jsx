"use client";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md z-20 fixed w-full">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* LOGO */}
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Home</span>
            <span className="text-yellow-500">Realty</span>
          </h1>
        </Link>

        {/* SEARCH COMING SOON */}

        {/* NAVIGATION */}
        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden md:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden md:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <li className="hidden md:inline text-slate-700 hover:underline">
                Sign In
              </li>
            </Link>
          </SignedOut>
        </ul>
      </div>
    </header>
  );
}
