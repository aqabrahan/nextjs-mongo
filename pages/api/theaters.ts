import clientPromise from "../../lib/mongodb";

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const theaters = await db
      .collection("theaters")
      .find({})
      // .sort({ location: -1 })
      .limit(10)
      .toArray();

    res.json(theaters);
  } catch (error) {}
};
