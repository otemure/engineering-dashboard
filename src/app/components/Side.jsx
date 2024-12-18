"use client";
import Link from "next/link";
import Image from "next/image";
import {
  WalletIcon,
  UserIcon,
  CreditCardIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-50 bg-aellaSideBar text-white flex flex-col justify-between">
      <div>
        <h1 className="mt-11 border-b border-gray-500 w-1/7 mx-auto ml-8 mr-4 mb-3 items-center justify-center">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className="mr-2 ml-5"
          />
          <div className="mt-2 text-sm ml-5">ENGINEERING PORTAL</div>
        </h1>

        <nav className="flex-1 p-6 mt-6">
          <ul>
            <li
              className={`mb-4 flex items-center space-x-2 pl-8 ${
                activeItem === "wallet" ? "bg-aellaActive" : ""
              }`}
            >
              <WalletIcon className="h-6 w-6 text-aellaGray" />
              <Link
                href="/dashboard/wallet"
                className="block p-2 rounded text-sm text-aellaGray  border-gray-500 w-60 mx-auto"
                onClick={() => handleClick("wallet")}
              >
                Wallet
              </Link>
            </li>
            <li
              className={`mb-4 flex items-center space-x-2 ${
                activeItem === "profile" ? "bg-aellaActive" : ""
              }`}
            >
              <UserIcon className="h-6 w-6 text-white ml-8" />
              <Link
                href="/dashboard/profile"
                className="block p-2 rounded text-sm text-aellaGray  border-gray-500 w-60 mx-auto"
                onClick={() => handleClick("profile")}
              >
                Profile
              </Link>
            </li>

            <li
              className={`mb-4 flex items-center space-x-2 ${
                activeItem === "cards" ? "bg-aellaActive" : ""
              }`}
            >
              <CreditCardIcon className="h-6 w-6 text-white ml-8" />
              <Link
                href="/dashboard/cards"
                className="block p-2 rounded text-sm  border-gray-500 w-60 mx-auto"
                onClick={() => handleClick("cards")}
              >
                Cards
              </Link>
            </li>

            <li
              className={`mb-4 flex items-center space-x-2 ${
                activeItem === "directDebit" ? "bg-aellaActive" : ""
              }`}
            >
              <BanknotesIcon className="h-6 w-6 text-white ml-8" />
              <Link
                href="/dashboard/directDebit"
                className="block p-2 rounded text-sm text-aellaGray  border-gray-500 w-60 mx-auto"
                onClick={() => handleClick("directDebit")}
              >
                Direct Debit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
