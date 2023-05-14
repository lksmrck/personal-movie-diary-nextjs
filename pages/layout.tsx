import { ReactNode, FC } from "react";
import Navbar from "@components/navbar/Navbar";
import Provider from "@components/Provider";

//TODO: metadata
export const metadata = {
  title: "Movie Diary",
  description: "Add & Store Watched Movies",
};

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-mainBlue h-screen">{children}</main>
      <footer>tu bude footer</footer>
    </>
  );
};

export default Layout;
