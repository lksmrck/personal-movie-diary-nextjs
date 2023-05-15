import { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../../utils/database";
import UserMovies from "@models/UserMovies";
import Movie from "@models/Movie";

/* interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    number_one: number;
    number_two: number;
  };
} */

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, imageURL, userId, dateWatched, dateAdded, rating } =
    await req.body(); // req.json()

  try {
    // Needs to connect to DB with every request
    await connectToDB();
    const newMovie = new Movie({
      id,
      name,
      imageURL,
      userId,
      dateWatched,
      dateAdded,
      rating,
    });
    const newUserMovies = new UserMovies({});

    await newMovie.save();

    return new Response(JSON.stringify(newMovie), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new movie.", { status: 500 });
  }
};
