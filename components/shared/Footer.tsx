import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t">
      <div className="flex center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={160}
            height={38}
            alt="logo"
          ></Image>
        </Link>
        <p> 2024 , All Rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
