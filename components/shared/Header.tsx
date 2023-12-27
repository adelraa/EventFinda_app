import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.png"
            width={160}
            height={38}
            alt="logo"
          ></Image>
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <div className="md:flex-between lg:hidden">
              <MobileNav />
            </div>
          </SignedIn>
          <SignedOut>
            <Button className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
