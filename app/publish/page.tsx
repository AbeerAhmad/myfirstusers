"use client";
import { useBlogContext } from "@/context/BlogContext";
import { useRouter } from "next/navigation";

export default function AddNewItemForm() {
  const {
    selectedCategory,
    tags,
    formData,
    handleCategoryChange,
    handleInputChange,
    addExample,
  } = useBlogContext();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = addExample();
    if (res) router.replace(`/${res?.tag}/${res?.slug}?ref=home`);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        {/* Category Selection */}
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="acquisition">ACQUISITION</option>
          <option value="conversion">CONVERSION</option>
          <option value="more">MORE</option>
          <option value="newsletter">NEWSLETTER</option>
        </select>

        {/* Tag Selection */}
        <label
          htmlFor="tag"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Tag
        </label>
        <select
          id="tag"
          name="tag"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          value={formData.tag}
          onChange={(e) => handleInputChange("tag", e.target.value)}
          disabled={!tags.length}
        >
          <option value="">Select a tag</option>
          {tags.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.title}
            </option>
          ))}
        </select>

        {/* Title Input */}
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter title"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />

        {/* Duration Input */}
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700 mt-4"
        >
          Duration
        </label>
        <input
          id="duration"
          name="duration"
          type="text"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
          placeholder="Enter duration (e.g., 3 mins)"
          value={formData.duration}
          onChange={(e) => handleInputChange("duration", e.target.value)}
        />

        {/* Submit Button */}
        <button
          className="mt-6 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
