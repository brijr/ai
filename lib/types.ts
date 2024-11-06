type ContentItem = {
  title: string;
  slug: string;
  description: string;
};

type Content = {
  posts: ContentItem[];
  resources: ContentItem[];
};
