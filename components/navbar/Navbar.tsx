import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import Modal from "@components/search/Modal";

const Navbar = () => {
  /*   const isUserLoggedIn = true; */

  const { data: session } = useSession();
  // TODO: Auth providers
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="w-full flex justify-between p-4">
      <Modal
        isModalOpen={isModalOpen}
        handleModalClose={() => setIsModalOpen(false)}
      />
      <Link href="/" className="flex gap-2">
        <Image alt="logo" src="/next.svg" width="50" height="50" />
        <p className=" max-sm:hidden font-bold">movie diary</p>
      </Link>
      {session?.user ? (
        <div className="flex ">
          <Image
            alt="profile"
            src={String(session?.user?.image)}
            width="30"
            height="30"
            className=" rounded-full"
          />
          <Button className="blue_btn" onClick={() => setIsModalOpen(true)}>
            Add movie
          </Button>
          {/*  <Link href="/add-movie">
            <Button className="blue_btn" onClick={() => setIsModalOpen(true)}>
              Add Movie
            </Button>
          </Link> */}
          <Button className="outline_btn" onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <Button onClick={() => signIn(provider.id)} className="blue_btn">
                Sign In
              </Button>
            ))}
        </>
      )}
    </nav>
  );
};

export default Navbar;
