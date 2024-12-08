"use client";

import Image from "next/image";
import React, { useState } from "react";
import topLogo from "@public/images/logo/favicon.svg";
import logo from "@public/images/logo/logo.svg";
import wishlistIcon from "@public/images/icons/wishlist.svg";
import cartIcon from "@public/images/icons/cart.svg";
import searchIcon from "@public/images/icons/search.svg";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-light-gray">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-200">
        {/* Logo */}
        <div className="mb-2 md:mb-0">
          <Link href="/">
            <Image src={topLogo} alt="Top Logo" width={24} height={24} />
          </Link>
        </div>

        {/* Top Navigation */}
        <ul className="flex flex-wrap items-center space-x-6 text-sm md:text-base text-black">
          <li className="flex-1">
            <Link href="/find-store" className="block text-center">
              Find a Store
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/contact-us" className="block text-center">
              Help
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/join-us" className="block text-center">
              Join Us
            </Link>
          </li>
          <li className="flex-1">
            <Link href="/login" className="block text-center">
              Sign In
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Section */}
      <div className="flex justify-between items-center px-6 py-4 bg-white">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={80} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="#">New & Featured</Link>
          <Link href="#">Men</Link>
          <Link href="#">Women</Link>
          <Link href="#">Kids</Link>
          <Link href="#">Sale</Link>
          <Link href="/snikrs">SNKRS</Link>
        </nav>

        {/* Search, Wishlist, Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center px-4 py-2 bg-gray-200 rounded-full">
            <Image src={searchIcon} alt="Search" width={20} height={20} />
            <input
              type="text"
              placeholder="Search"
              className="ml-3 bg-transparent focus:outline-none text-sm"
            />
          </div>
          <button>
            <Image src={wishlistIcon} alt="Wishlist" width={24} height={24} />
          </button>
          <button>
            <Image src={cartIcon} alt="Cart" width={24} height={24} />
          </button>
        </div>

        {/* Hamburger Menu */}
        <button
          className="flex md:hidden flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-light-gray p-4">
          <ul className="flex flex-col space-y-4 text-black">
            <Link href="/find-store">Find a Store</Link>
            <Link href="/contact-us">Help</Link>
            <Link href="/join-us">Join Us</Link>
            <Link href="/login">Sign In</Link>
            <Link href="#">New & Featured</Link>
            <Link href="#">Men</Link>
            <Link href="#">Women</Link>
            <Link href="#">Kids</Link>
            <Link href="#">Sale</Link>
            <Link href="/snikrs">SNKRS</Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
