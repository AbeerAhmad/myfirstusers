type Tag = {
  title: string;
  slug: string;
};

type Category = {
  [key: string]: Tag[];
};

export { Tag, Category };
