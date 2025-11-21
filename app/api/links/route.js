import { NextResponse } from "next/server";
import db from "@/lib/db";
import { nanoid } from "nanoid";

export async function GET() {
  const result = await db.query("SELECT * FROM links ORDER BY created_at DESC");
  return NextResponse.json(result.rows);
}

export async function POST(req) {
  try {
    const { target_url, custom_code } = await req.json();
    const code = custom_code || nanoid(6);

    // URL validation
    new URL(target_url);

    // Check duplicate code
    const exists = await db.query("SELECT code FROM links WHERE code=$1", [code]);
    if (exists.rows.length) {
      return NextResponse.json({ error: "Code already exists" }, { status: 409 });
    }

    // Insert into DB
    await db.query(
      "INSERT INTO links (code, target_url) VALUES ($1, $2)",
      [code, target_url]
    );

    return NextResponse.json({ code });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
