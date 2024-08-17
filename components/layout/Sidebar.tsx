"use client";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const params = useParams();
  const pathname = usePathname();
  const query = useSearchParams();
  const isDirect = query.get("ref") === "home";

  const categories = [
    {
      title: "ACQUISITION",
      slug: "acquisition",
      items: [
        { title: "Content", slug: "content" },
        { title: "SEO", slug: "seo" },
        { title: "Sales", slug: "sales" },
        { title: "Social", slug: "social" },
        { title: "Ads", slug: "ads" },
      ],
    },
    {
      title: "CONVERSION",
      slug: "conversion",
      items: [
        { title: "Copywriting", slug: "copywriting" },
        { title: "Landing Page", slug: "landing-page" },
      ],
    },
    {
      title: "MORE",
      slug: "more",
      items: [
        {
          title: "Retention",
          slug: "retention",
        },
        {
          title: "Brand",
          slug: "brand",
        },
        { title: "Referral", slug: "referral" },
        { title: "Creative", slug: "creative" },
      ],
    },
    { title: "NEWSLETTER", items: [] },
  ];
  return (
    <div className="lg:col-span-1">
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="font-bold text-lg mb-3 text-blue-600">
            {category.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {category.items.map((item, itemIndex) => (
              <Link
                href={params.category === item.slug ? "/" : `/${item.slug}`}
                key={itemIndex}
                className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                  params.category === item.slug && !isDirect
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
