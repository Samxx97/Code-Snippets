import { NextResponse  } from "next/server";
import userModel from "@models/user";

export async function GET() {
  const model = await userModel();
  const users = await model.find();
     let responseMessage = NextResponse.json({
      users: users,
     })
  return responseMessage;
}

