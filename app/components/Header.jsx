import { FaUser } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

import React from 'react';

export default function Header() {
  return (
    <header className="container mx-auto flex max-w-4xl flex-col gap-5 py-[2px]">
      {/* Login bar */}
      <div className="flex w-full items-center justify-end">
        <div className="flex items-center gap-5">
          {/* balance, login, create account */}
          <div className="flex items-center gap-2">
            {/* balace */}
            <div>
              <p>
                <span className="text-blue-sw text-xs">
                  <em>Log in to view to points balance</em>
                </span>
              </p>
            </div>

            {/* Login button */}
            <div>
              <button className="text-black-sw hover:border-black-sw box-shadow-sw bg-yellow-sw flex items-center gap-1 rounded-sm border border-transparent px-[20px] py-2 transition-all">
                <span>
                  <FaUser className="" />
                </span>
                <span className="text-xs font-bold">Log in</span>
              </button>
            </div>

            {/* Create acc */}
            <a
              href="#"
              className="text-blue-sw text-xs font-bold hover:underline"
            >
              Create account
            </a>
          </div>

          {/* Espanol? */}
          <button className="text-blue-sw flex items-center gap-1 text-xs">
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
          <img
            src="/images/logo/southWestLogoBlue.svg"
            alt="southwest logo"
            // className="w-20"
          />
        </div>

        {/* navbar */}
        <nav className="flex items-center gap-5">
          {/* Links */}
          <ul className="text-blue-sw flex items-center gap-1">
            <li>
              <a href="#" className="text-xs font-bold uppercase">
                flight |
              </a>
            </li>
            <li>
              <a href="#" className="text-xs font-bold uppercase">
                hotel |
              </a>
            </li>
            <li>
              <a href="#" className="text-xs font-bold uppercase">
                car |
              </a>
            </li>
            <li>
              <a href="#" className="text-xs font-bold uppercase">
                vacations |
              </a>
            </li>
            <li>
              <a href="#" className="text-xs font-bold uppercase">
                cruises
              </a>
            </li>
          </ul>

          {/* Special offers */}
          <button className="text-blue-sw text-xs font-bold uppercase">
            <span>special offers</span>
          </button>

          {/* rapid rewards */}
          <button className="text-blue-sw text-xs font-bold uppercase">
            <span>Rapid Rewards</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
