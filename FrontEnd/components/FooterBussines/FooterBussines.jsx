import React from "react";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FooterBussines = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <footer className="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-blue-700">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://bookturn.com/" className="hover:underline">
            Bookturn
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-200 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Bookturn
            </Link>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default FooterBussines;
