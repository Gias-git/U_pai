'use client';

export default function GlobalLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative flex items-center justify-center w-8 h-8">
        {/* Outer pinging circle */}
        <div className="absolute inline-flex w-full h-full rounded-full bg-gray-400 opacity-75 animate-ping"></div>

        {/* Inner solid circle */}
        <div className="relative inline-flex w-4 h-4 rounded-full bg-gray-400 animate-ping"></div>
      </div>
    </div>
  );
}
