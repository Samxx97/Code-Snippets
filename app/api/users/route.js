import { NextResponse  } from "next/server";
import userModel from "@models/user";

export async function GET() {
  const model = await userModel();
  var users = [];
  if (model) {
    users = await model.find()
    console.log(users)
  }
  
  return NextResponse.json({
    users: users
  })
}

export async function POST(req) {

  const reqBody = await req.json()

  var users = []
  const model = await userModel();
  users = await model?.find({name: reqBody.name})

  if (users && users.length != 0) {
    console.log("user is already found")
    return NextResponse.json({
      message: "User found",
      users: users
    })
  }
  // create new user
  await model.create({
    name: reqBody.name,
    size: "xl"
  }).then((user) => {
    console.log(`created a new User! ${user}`)
  });

  return NextResponse.json({message: "User created successfully"})
}

