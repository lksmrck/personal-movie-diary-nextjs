import { Button } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" h-screen bg-mainBlue">
      <Button variant="contained">Contained</Button>
    </main>
  );
}
