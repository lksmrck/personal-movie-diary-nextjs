import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";

const Navbar = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="w-full flex justify-between p-4">
      <Link href="/" className="flex gap-2">
        <Image alt="logo" src="/next.svg" width="50" height="50" />
        <p className=" max-sm:hidden font-bold">movie diary</p>
      </Link>
      {isUserLoggedIn && (
        <Link href="/add-movie">
          <Button className="blue_btn">Add Movie</Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
