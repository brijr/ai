import { content } from "@/lib/content";
import Link from "next/link";

export default function Index() {
  const posts = content.posts;
  const resources = content.resources;

  return (
    <div className="grid gap-12">
      <section>
        <h2>Posts</h2>
        <div>
          {posts.map((post) => (
            <Link key={post.slug} href={`/${post.slug}`}>
              {post.title}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Resources</h2>
        <div>
          {resources.map((resource) => (
            <Link key={resource.slug} href={`/${resource.slug}`}>
              {resource.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
