"use client";
import { BlogProvider } from "@/context/BlogContext";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogProvider>
        <div className="p-[5%] bg-white text-gray-800 min-h-screen">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            <Sidebar />
            <div className="lg:col-span-5">{children}</div>
          </div>
        </div>
      </BlogProvider>
    </>
  );
}
