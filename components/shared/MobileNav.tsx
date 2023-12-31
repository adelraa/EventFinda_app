"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavItems from "./NavItems";

function MobileNav() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const toggleSheet = () => {
    setIsSheetOpen((prev: any) => !prev);
  };

  const handleLinkClick = () => {
    closeSheet(); // Close the sheet when a link is clicked
    // Additional logic if needed upon link click
  };

  return (
    <nav className="md:hidden">
      <Sheet open={isSheetOpen} >
        <SheetTrigger className="align-middle" onClick={toggleSheet}>
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col md:hidden bg-white">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={140}
            height={38}
            className="cursor-pointer"
          />
          <Separator />
          <NavItems handleLinkClick={handleLinkClick} />
          
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
