import { FaUser } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="container-sw flex flex-col pb-6 pt-2">
      {/* Login bar */}
      <div className="flex w-full items-center justify-end">
        <div className="flex items-center gap-5">
          {/* balance, login, create account */}
          <div className="flex items-center gap-2">
            {/* balace */}
            <div>
              <p>
                <span className="text-xs italic text-blue-sw">
                  Log in to view points balance
                </span>
              </p>
            </div>

            {/* Login button */}
            <div>
              <button className="box-shadow-sw flex items-center gap-1 rounded-sm border border-transparent bg-yellow-sw px-[20px] py-2 text-black-sw transition-all hover:border-black-sw hover:shadow-none">
                <span>
                  <FaUser className="" />
                </span>
                <span className="text-xs font-bold">Log in</span>
              </button>
            </div>

            {/* Create acc */}
            <a
              className="text-xs font-bold text-blue-sw hover:underline"
              href="#"
            >
              Create account
            </a>
          </div>

          {/* Espanol? */}
          <button className="flex items-center gap-1 text-xs text-blue-sw">
            <span className="cursor-pointer hover:underline">Español</span>
            <span>
              <BsGlobe className="text-sm font-bold" />
            </span>
          </button>
        </div>
      </div>

      {/* Logo and nav */}
      <div className="flex items-end justify-between">
        {/* Logo */}
        <div>
          <Link href={'/'}>
            <img
              src="/images/logo/southWestLogoBlue.svg"
              alt="southwest logo"
              // className="w-20"
            />
          </Link>
        </div>

        {/* navbar */}
        <nav className="-mb-2 flex items-center gap-5">
          {/* Links */}
          <ul className="flex items-center gap-1 text-blue-sw">
            <li>
              <a className="text-xs font-bold uppercase" href="#">
                flight |
              </a>
            </li>
            <li>
              <a className="text-xs font-bold uppercase" href="#">
                hotel |
              </a>
            </li>
            <li>
              <a className="text-xs font-bold uppercase" href="#">
                car |
              </a>
            </li>
            <li>
              <a className="text-xs font-bold uppercase" href="#">
                vacations |
              </a>
            </li>
            <li>
              <a className="text-xs font-bold uppercase" href="#">
                cruises
              </a>
            </li>
          </ul>

          {/* Special offers */}
          <button className="text-xs font-bold uppercase text-blue-sw">
            <span>special offers</span>
          </button>

          {/* rapid rewards */}
          <button className="text-xs font-bold uppercase text-blue-sw">
            <span>Rapid Rewards</span>
            <sup className="pl-[1px]">®</sup>
          </button>

          <FaSearch className="text-blue-sw" />
        </nav>
      </div>
    </header>
  );
}
