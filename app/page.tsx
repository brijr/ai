import { content } from "@/lib/content";
import Link from "next/link";

export default function Index() {
  const posts = content.posts;
  const resources = content.resources;

  return (
    <div className="grid gap-12">
      <section>
        <h2>Posts</h2>
        {posts.map((post) => (
          <ContentLink key={post.slug} {...post} />
        ))}
      </section>

      <section>
        <h2>Resources</h2>
        {resources.map((resource) => (
          <ContentLink key={resource.slug} {...resource} />
        ))}
      </section>
    </div>
  );
}

const ContentLink = ({ title, slug }: { title: string; slug: string }) => (
  <Link
    className="text-muted-foreground hover:text-foreground transition-all"
    href={`/${slug}`}
  >
    {title}
  </Link>
);
