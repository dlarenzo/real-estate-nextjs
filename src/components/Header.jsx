import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* LOGO */}
        <Link href="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Home</span>
            <span className="text-slate-700">Realty</span>
          </h1>
        </Link>
        {/* SEARCH */}
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="h-4 w-4 text-slate-600" />
          </button>
        </form>
        {/* NAVIGATION */}
        <ul className="flex gap-4">
          <Link href="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link href="sign-in">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
