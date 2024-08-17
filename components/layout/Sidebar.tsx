"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import { categories } from "@/mockdata/mockdata";
export default function Sidebar() {
  const params = useParams();
  const query = useSearchParams();
  const isDirect = query.get("ref") === "home";

  return (
    <div className="lg:col-span-1">
      {Object.entries(categories).map(([category, tags]) => (
        <div key={category} className="mb-6">
          <h2 className="font-bold text-lg mb-3 text-blue-600 uppercase">
            {category}
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, tagIndex) => (
              <Link
                href={params.category === tag.slug ? "/" : `/${tag.slug}`}
                key={tagIndex}
                className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                  params.category === tag.slug && !isDirect
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {tag.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
