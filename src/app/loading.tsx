// app/loading.tsx
'use client'

import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Loader className="w-10 h-10 animate-spin text-gray-800" />
    </div>
  );
}
