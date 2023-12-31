"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiHome, FiUser, FiSettings, FiInfo } from "react-icons/fi"; // Import icons from react-icons library

function NavItems({ handleLinkClick }: any) {
  const pathName = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathName === link.route;
        // Get the corresponding icon based on the label

        return (
          <li key={link.route}>
            <Link
              href={link.route}
              className={`${
                isActive && "text-primary-500"
              } flex-center p-medium-16 whitespace-nowrap`}
              onClick={handleLinkClick}
            >
              {/* Render the icon if available */}
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default NavItems;
