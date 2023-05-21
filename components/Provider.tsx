"use client";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
import { SearchContextProvider } from "@context/SearchContext";
import { MoviesContextProvider } from "@context/MoviesContext";

// TODO: session type
const Provider: FC<{ children: ReactNode; session: any }> = ({
  children,
  session,
}) => {
  return (
    <SessionProvider session={session}>
      <SearchContextProvider>
        <MoviesContextProvider>{children}</MoviesContextProvider>
      </SearchContextProvider>
    </SessionProvider>
  );
};

export default Provider;
