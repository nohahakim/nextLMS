import { NextResponse } from "next/server";

// 📡 Imports NextResponse for API responses

export async function GET() {
  return NextResponse.json({ message: "test hello" });

  // 🌐 Returns JSON at /api/test
}
