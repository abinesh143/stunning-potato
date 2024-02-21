import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:admin123@cluster0.glemluw.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const mongo = new MongoClient(uri, options);

export async function GET(req) {
  try {
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    const metadata = await db.collection("metadata").find({}).toArray();
    await mongo.close();
    return NextResponse.json(metadata);
  } catch (error) {
    return NextResponse.json({ message: "Failed" });
  }
}
