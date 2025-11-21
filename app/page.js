// "use client";
// import LinkForm from "@/components/LinkForm";
// import dynamic from "next/dynamic";

// const LinksTable = dynamic(() => import("@/components/LinksTable"), {
//   ssr: false,
// });

// export default function Page() {
//   return (
//     <div className="max-w-2xl mx-auto mt-10 p-4">
//       <h1 className="text-3xl font-bold mb-4">TinyLink Dashboard</h1>

//       <LinkForm onSuccess={() => {}} />
//       <LinksTable />
//     </div>
//   );
// }
"use client";

import LinkForm from "@/components/LinkForm";
import LinksTable from "@/components/LinksTable";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white p-6">
      <div className="max-w-3xl mx-auto mt-10 space-y-6">

        <h1 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
          TinyLink Dashboard
        </h1>

        <div className="glass p-6 glow">
          <LinkForm onSuccess={() => {}} />
        </div>

        <div className="glass p-4 glow">
          <LinksTable />
        </div>

      </div>
    </div>
  );
}
