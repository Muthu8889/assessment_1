"use client";

import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* switch bg from black → slate-50  */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-12 bg-slate-50">
        <h1 className="text-3xl font-semibold mb-4 text-slate-900">
          Web-Engineer Assessment Demo
        </h1>
        <p className="text-center max-w-lg text-slate-600">
          Use the navigation bar above to sign&nbsp;in and explore protected areas of
          the app.
        </p>
      </main>
    </>
  );
}