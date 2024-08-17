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
  addExample: () => Example | null;
};

export {
  Tag,
  Category,
  FormData,
  Example,
  BlogContextType,
  BlogProvider,
  BlogContext,
};
