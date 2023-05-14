import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" head_text p-4  ">
        YOUR
        <span className=" blue_gradient"> MOVIE DIARY</span>
      </h1>

      <Button variant="outlined">ADD</Button>
    </div>
  );
}
