// import db from "@/lib/db";

// export default async function Page(props) {
//   const params = await props.params;
//   const { code } = params;

//   const result = await db.query(
//     "SELECT * FROM links WHERE code=$1",
//     [code]
//   );

//   if (result.rows.length === 0) {
//     return (
//       <h1 className="text-center mt-20 text-2xl text-red-600">
//         404 – No Stats Found
//       </h1>
//     );
//   }

//   const link = result.rows[0];

//   return (
//     <div className="max-w-lg mx-auto mt-10 bg-white shadow p-6 rounded">
//       <h1 className="text-2xl font-bold mb-4">Link Stats</h1>

//       <p><strong>Short Code:</strong> {link.code}</p>
//       <p><strong>Target URL:</strong> {link.target_url}</p>
//       <p><strong>Total Clicks:</strong> {link.clicks}</p>
//       <p><strong>Created At:</strong> {new Date(link.created_at).toLocaleString()}</p>
//       <p><strong>Last Clicked:</strong> 
//         {link.last_clicked_at ? new Date(link.last_clicked_at).toLocaleString() : "Never"}
//       </p>
//     </div>
//   );
// }
import db from "@/lib/db";

export default async function Page(props) {
  const params = await props.params;
  const { code } = params;

  const result = await db.query(
    "SELECT * FROM links WHERE code=$1",
    [code]
  );

  if (result.rows.length === 0) {
    return (
      <h1 className="text-center mt-20 text-2xl text-red-600">
        404 – No Stats Found
      </h1>
    );
  }

  const link = result.rows[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white p-6">
      <div className="max-w-lg mx-auto mt-10 glass p-6 glow">
        <h1 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Link Stats
        </h1>

        <p className="mb-2"><strong>Short Code:</strong> {link.code}</p>
        <p className="mb-2"><strong>Target URL:</strong> {link.target_url}</p>
        <p className="mb-2"><strong>Total Clicks:</strong> {link.clicks}</p>
        <p className="mb-2">
          <strong>Created At:</strong> 
          {new Date(link.created_at).toLocaleString()}
        </p>
        <p>
          <strong>Last Clicked:</strong>
          {link.last_clicked_at
            ? new Date(link.last_clicked_at).toLocaleString()
            : "Never"}
        </p>
      </div>
    </div>
  );
}
