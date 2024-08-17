import React, { createContext, useContext, useState, ReactNode } from "react";

// Define types for Category, Tag, FormData, and Example
type Tag = {
  title: string;
  slug: string;
};

type Category = {
  [key: string]: Tag[];
};

type FormData = {
  title: string;
  duration: string;
  tag: string;
};

type Example = {
  slug: string;
  title: string;
  duration: string;
  tag: string;
};

type BlogContextType = {
  categories: Category;
  selectedCategory: string;
  tags: Tag[];
  formData: FormData;
  examples: Example[];
  handleCategoryChange: (category: string) => void;
  handleInputChange: (name: keyof FormData, value: string) => void;
  addExample: () => void;
};
import { categories, examplesData } from "@/mockdata/mockdata";
// Create the context with a default value
const BlogContext = createContext<BlogContextType | undefined>(undefined);

// Provider component
export function BlogProvider({ children }: { children: ReactNode }) {
  // Categories and Initial State
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    duration: "",
    tag: "",
  });

  // Manage examples array
  const [examples, setExamples] = useState<Example[]>(
    examplesData.map((example) => ({
      slug: example.title.toLowerCase().replace(/\s+/g, "-"),
      title: example.title,
      duration: example.duration,
      tag: example.tag,
    }))
  );

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setTags(categories[category as keyof typeof categories] || []);
    setFormData({ ...formData, tag: "" });
  };

  // Handle form input changes
  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add new example to the examples array
  const addExample = () => {
    if (formData.title && formData.duration && formData.tag) {
      const newExample: Example = {
        slug: formData.title.toLowerCase().replace(/\s+/g, "-"),
        title: formData.title,
        duration: formData.duration,
        tag: formData.tag,
      };

      setExamples([...examples, newExample]);

      // Reset the form
      setFormData({
        title: "",
        duration: "",
        tag: "",
      });
      return newExample;
    } else {
      alert("Please fill out all fields before adding an example.");
      return null;
    }
  };

  return (
    <BlogContext.Provider
      value={{
        categories,
        selectedCategory,
        tags,
        formData,
        examples,
        handleCategoryChange,
        handleInputChange,
        addExample,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

// Custom hook to use the form context
export function useBlogContext(): BlogContextType {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useFormContext must be used within a BlogProvider");
  }
  return context;
}
