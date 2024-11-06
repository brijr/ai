import { content } from "@/lib/content";
import { CircleIcon } from "@radix-ui/react-icons";

import Link from "next/link";

export default function Index() {
  const posts = content.posts;
  const resources = content.resources;

  return (
    <div className="grid gap-24">
      <h1>Design for AI</h1>

      <section>
        <h2 className="mb-4">Posts</h2>
        {posts.map((post) => (
          <ContentLink key={post.slug} {...post} />
        ))}
      </section>

      <section>
        <h2 className="mb-4">Resources</h2>
        {resources.map((resource) => (
          <ContentLink key={resource.slug} {...resource} />
        ))}
      </section>
    </div>
  );
}

const ContentLink = ({ title, slug }: { title: string; slug: string }) => (
  <Link
    className="text-muted-foreground relative flex items-center gap-2 group hover:text-foreground transition-all"
    href={`/${slug}`}
  >
    <CircleIcon className="opacity-0 w-3 h-3 absolute -left-5 group-hover:opacity-100 transition-all" />
    {title}
  </Link>
);
