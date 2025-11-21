import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function DELETE(req, ctx) {
  const params = await ctx.params;   // ⭐ FIX: unwrap Promise
  const code = params.code;

  // Debug log
  console.log("Deleting from API:", code);

  await db.query("DELETE FROM links WHERE code=$1", [code]);

  return NextResponse.json({ deleted: true });
}

export async function GET(req, ctx) {
  const params = await ctx.params;
  const code = params.code;

  const result = await db.query("SELECT * FROM links WHERE code=$1", [code]);
  if (!result.rows.length) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(result.rows[0]);
}
