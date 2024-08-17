"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Modal from "@/components/Modal"; // We'll create this component
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useBlogContext } from "@/context/BlogContext";
import TimeIndicator from "../svg/TimeIndicator";

interface Example {
  title: string;
  duration: string;
  tag: string;
}

const MainFeed = () => {
  const params = useParams() as { category: string; slug: string };
  const query = useSearchParams();
  const pathname = usePathname();
  const isDirect = query.get("ref") === "home";
  const router = useRouter();
  const [selectedExample, setSelectedExample] = useState<Example | null>(null);
  const { examples } = useBlogContext();
  const selectedCategory = params.category as string;

  const filteredExamples = useMemo(() => {
    if (!selectedCategory || isDirect) return examples;
    return examples.filter((example) => example.tag === selectedCategory);
  }, [selectedCategory, examples]);

  useEffect(() => {
    if (selectedExample) return;
    const foundExample = filteredExamples.find(
      (example) => example.slug === params.slug
    );
    if (!foundExample) return;
    setSelectedExample(foundExample || null);
  }, [params.slug, filteredExamples]);

  const handleCloseModal = () => {
    setSelectedExample(null);
    router.back();
  };

  return (
    <div className="grid grid-cols-1">
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExamples.map((example, index) => (
          <Link
            key={index}
            href={{
              pathname: `/${example.tag}/${example.slug}`,
              ...(pathname === "/" && {
                query: {
                  ref: "home",
                },
              }),
            }}
            className=""
          >
            <Card
              key={index}
              className="w-full h-[200px] p-6 flex flex-col justify-between bg-white-100 hover:shadow-md border-2 transition-shadow  rounded-3xl shadow-sm cursor-pointer"
            >
              <h3 className="font-bold text-lg mb-3 text-blue-800">
                {example.title}
              </h3>
              <div className="flex justify-between items-center">
                <span className="text-xs flex gap-2 items-center text-gray-600 px-3 font-semibold py-1 rounded-full">
                  <TimeIndicator />
                  <span className="mt-1"> {example.duration}</span>
                </span>
                <span className="text-blue-600 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 capitalize">
                  {example.tag.split("-").join(" ") || "No Tag"}
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      {selectedExample && (
        <Modal title={selectedExample.title} onClose={handleCloseModal}>
          <p>Duration: {selectedExample.duration}</p>
          <p className="capitalize">Tag: {selectedExample.tag}</p>
          {/* Add more content for the modal here */}
        </Modal>
      )}
    </div>
  );
};

export default MainFeed;
