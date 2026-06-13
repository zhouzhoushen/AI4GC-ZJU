import Link from "next/link";
import Image from "next/image";
import BlogAuthorMeta from "@/components/blog/BlogAuthorMeta";
import Tag from "@/components/site/Tag";
import { newsDateTimeAttr } from "@/lib/content/date";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types/lab";

const blogThumbSizes = "(min-width: 768px) 28rem, 100vw";

type BlogListItemProps = {
  post: BlogPost;
};

export default function BlogListItem({ post }: BlogListItemProps) {
  const href = `/blog/${post.id}`;
  const hasAuthors = post.authors.length > 0 || Boolean(post.author);

  return (
    <article className="blog-card-article">
      <div className={cn("blog-card", post.cover && "blog-card--with-cover")}>
        {post.cover ? (
          <Link href={href} className="blog-card__media" aria-label={post.title} tabIndex={-1}>
            <Image
              src={post.cover}
              alt=""
              fill
              className="blog-card__cover"
              sizes={blogThumbSizes}
              aria-hidden
            />
          </Link>
        ) : null}

        <div className="blog-card__body">
          <p className="blog-card__meta">
            <time dateTime={newsDateTimeAttr(post.date)}>{post.date}</time>
            {hasAuthors ? (
              <>
                <span aria-hidden> · </span>
                <BlogAuthorMeta authors={post.authors} authorLabel={post.author} linkAuthors />
              </>
            ) : null}
          </p>

          <h3 className="blog-card__title">
            <Link href={href} className="blog-card__title-link">
              {post.title}
            </Link>
          </h3>

          {post.desc ? <p className="blog-card__desc">{post.desc}</p> : null}

          {post.tags.length > 0 ? (
            <div className="site-tag-list blog-card__tags">
              {post.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
