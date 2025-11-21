import db from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Page(props) {
  const params = await props.params;
  const { code } = params;

  const result = await db.query("SELECT * FROM links WHERE code=$1", [code]);

  if (result.rows.length === 0) {
    return (
      <h1 className="text-center mt-20 text-2xl text-red-600">
        404 – Link Not Found
      </h1>
    );
  }

  const link = result.rows[0];

  await db.query(
    "UPDATE links SET clicks = clicks + 1, last_clicked_at = NOW() WHERE code=$1",
    [code]
  );

  redirect(link.target_url);
}
