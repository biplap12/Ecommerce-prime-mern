import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-base text-center text-gray-400">
            &copy; 2024 Beep, Inc. All rights reserved.
            &nbsp;&nbsp;&nbsp;
            <Link target="_blank"  rel="noopener noreferrer" to="https://www.biplapneupane.com.np/" className="text-indigo-600 hover:text-indigo-500 underline">
             Made by Biplap Neupane❤️
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
