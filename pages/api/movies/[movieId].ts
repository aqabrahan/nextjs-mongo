import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req: any, res: any) => {
  try {
    const { movieId } = req.query;
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    let s = {};
    if (movieId) {
      s = {
        _id: new ObjectId(movieId),
      };
    }

    const movies = await db.collection("movies").findOne(s);
    // .findOne({ rated: "NOT RATED" });
    // .sort({ metacritic: -1 })
    // .limit(10)
    // .toArray();
    res.json(movies);
  } catch (e) {
    console.log(e);
  }
};
