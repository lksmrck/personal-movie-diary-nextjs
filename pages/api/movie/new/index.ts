import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../../utils/database";
import UserData from "@models/UserData";
/* import Movie from "@models/Movie"; */
/* import { useSession } from "next-auth/react"; */

/* interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    number_one: number;
    number_two: number;
  };
} */

const testMovie = {
  id: "testid",
  name: "testName",
  imageURL: "testURL",
  dateWatched: " testWatched",
  dateAdded: "testAdded",
  rating: 5,
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("zacatek");
  /*   const { data: session } = useSession(); */
  /*   const { id, name, imageURL, dateWatched, dateAdded, rating } =
    await req.body(); // req.json() */

  const { id, name, imageURL, dateWatched, dateAdded, rating } = testMovie;

  try {
    // Needs to connect to DB with every request
    await connectToDB();
    const newMovie = {
      id,
      name,
      imageURL,
      dateWatched,
      dateAdded,
      rating,
    };

    // Checks if user has already some movies added
    const usersOldMovies = await UserData.find({
      "movies.0": { $exists: true },
    });

    // TODO: upravit - vzdy vrati array, i když je prázdná
    if (usersOldMovies.length > 0) {
      // If user already has some movies added, pushes movie into his array
      await UserData.updateOne(
        { email: /* session?.user?.email */ "thatonelukas@gmail.com" },
        { $push: { movies: newMovie } }
      );
    } else {
      const newUserMovies = new UserData({
        email: "test",
        movies: [newMovie],
      });

      await newUserMovies.save();
    }

    res.status(201).json(newMovie);
  } catch (error) {
    console.log(error);
    res.status(500).json("failed to add movie");
  }
};
export default POST;
