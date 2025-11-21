// "use client";
// import { useState } from "react";

// export default function LinkForm({ onSuccess }) {
//   const [target, setTarget] = useState("");
//   const [code, setCode] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const res = await fetch("/api/links", {
//       method: "POST",
//       body: JSON.stringify({ target_url: target, custom_code: code }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.error || "Something went wrong");
//       setLoading(false);
//       return;
//     }

//     setTarget("");
//     setCode("");
//     setLoading(false);
//     onSuccess();
//   }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="p-4 bg-white shadow rounded mb-4 flex flex-col gap-3"
//     >
//       <input
//         type="text"
//         placeholder="Enter long URL"
//         value={target}
//         onChange={(e) => setTarget(e.target.value)}
//         className="border p-2 rounded"
//         required
//       />

//       <input
//         type="text"
//         placeholder="Custom short code (optional)"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         className="border p-2 rounded"
//       />

//       {error && <p className="text-red-600">{error}</p>}

//       <button
//         disabled={loading}
//         className="bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
//       >
//         {loading ? "Creating..." : "Create Short Link"}
//       </button>
//     </form>
//   );
// }
"use client";
import { useState } from "react";

export default function LinkForm({ onSuccess }) {
  const [target, setTarget] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/links", {
      method: "POST",
      body: JSON.stringify({ target_url: target, custom_code: code }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong");
      setLoading(false);
      return;
    }

    setTarget("");
    setCode("");
    setLoading(false);
    onSuccess();
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter long URL"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="p-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300"
        required
      />

      <input
        type="text"
        placeholder="Custom short code (optional)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="p-3 rounded bg-white/20 border border-white/30 text-white placeholder-gray-300"
      />

      {error && <p className="text-red-400">{error}</p>}

      <button
        disabled={loading}
        className="p-3 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-bold glow disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Short Link"}
      </button>
    </form>
  );
}
