import { NextResponse  } from "next/server";
import connectToDatabase from "@utils/database";

export async function GET() {
  const db = await connectToDatabase()
  return NextResponse.json({data: "hehe"})
}

