"use client";
import { useEffect, useState } from "react";

export default function LinksTable() {
  const [links, setLinks] = useState([]);

  // Load Links
  async function loadLinks() {
    const res = await fetch("/api/links", { cache: "no-store" });
    const data = await res.json();

    if (!Array.isArray(data)) {
      setLinks([]);
      return;
    }

    setLinks(data);
  }

  // Delete link
  async function handleDelete(code) {
    console.log("Deleting:", code);
    await fetch(`/api/links/${code}`, { method: "DELETE" });
    await loadLinks();
  }

  useEffect(() => {
    loadLinks();
  }, []);

  // FIXED: RETURN ADDED ↓↓↓
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-white border-collapse">
        <thead>
          <tr className="bg-white/10">
            <th className="p-3 border-b border-white/20">Short Code</th>
            <th className="p-3 border-b border-white/20">Target URL</th>
            <th className="p-3 border-b border-white/20">Clicks</th>
            <th className="p-3 border-b border-white/20">Actions</th>
          </tr>
        </thead>

        <tbody>
          {links.map((l) => (
            <tr key={l.code} className="hover:bg-white/10 transition">
              <td className="p-3 border-b border-white/10">{l.code}</td>
              <td className="p-3 border-b border-white/10 truncate max-w-xs">
                {l.target_url}
              </td>
              <td className="p-3 border-b border-white/10">{l.clicks}</td>
              <td className="p-3 border-b border-white/10">
                <button
                  onClick={() => handleDelete(l.code)}
                  className="px-4 py-1 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600 active:scale-95"
                  style={{ zIndex: 50 }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
