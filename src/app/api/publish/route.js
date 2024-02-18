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
    const publish = await db.collection("publishapp").find({}).toArray();
    await mongo.close();
    return NextResponse.json(publish);
  } catch (error) {
    return NextResponse.json({ message: "Failed" });
  }
}

export async function POST(req) {
  try {
    let bodyObject = await req.json();
    const client = await mongo.connect();
    const db = client.db("app-maker-pro");
    await db.collection("publishapp").updateOne(
      { userEmail: bodyObject.userEmail },
      {
        $set: {
          andriodApk: bodyObject.andriodApk,
          andriodAab: bodyObject.andriodAab,
          iosApk: bodyObject.iosApk,
          iosAbb: bodyObject.iosAbb,
          andriodReq: false,
          iosReq: false,
          andriodStatus: "done",
          iosStatus: "done",
        },
      }
    );
    await mongo.close();
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "failed" });
  }
}
