"use client";
import Image from "next/image";
import Logo from "../../../public/assets/Logo.svg";
import Menu from "../../../public/assets/Menu.svg";
import Link from "next/link";
import { useState } from "react";
import CustomButton from "./common/CustomButton";

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#aboutus" },
  { name: "Services", link: "#services" },
  { name: "Blog", link: "#blog" },
  { name: "Contact", link: "#contact" },
  { name: "Sign In", link: "#signin" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 py-4 lg:px-0 lg:container flex justify-between items-center">
      <div className="flex gap-1 items-center">
        <Image src={Logo} alt="Logo" />
        <h2 className="font-semibold text-lg leading-2">Innovative Solutions Group</h2>
      </div>
      {/* mobile menu */}
      {open && (
        <div className="lg:hidden fixed top-20 left-4 right-4 z-10 py-8 bg-white drop-shadow-md">
          <div className="flex flex-col items-center space-y-6 font-bold">
            {navLinks.map((item, index) => (
              <Link
                onClick={()=> setOpen(!open)}
                key={index}
                className="font-medium text-base text-primary"
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
            <div className="w-1/3">
              <CustomButton text='Try for Free' btnClassName="bg-[#EF2A82] flex lg:hidden"/>
            </div>
          </div>
        </div>
      )}
      {/* desktop menu */}
      <div className="flex items-center gap-8">
        <ul className="hidden lg:flex gap-x-8">
          {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                    className="text-base"
                    href={item.link}
                >
                  {item.name}
                </Link>
              </li>
          ))}
        </ul>

        <div className="flex justify-between items-center gap-x-5 lg:gap-x-14">
          <CustomButton text='Try for Free' btnClassName="hidden bg-[#EF2A82] lg:flex"/>
          <Image
              onClick={()=> setOpen(!open)}
              className="lg:hidden"
              src={Menu}
              width="32"
              height="32"
              alt="menu"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
