"use client";
import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

// TODO: session type
const Provider: FC<{ children: ReactNode; session: any }> = ({
  children,
  session,
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
