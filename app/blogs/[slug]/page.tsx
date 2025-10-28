import Section from "@/src/common/section-wrapper";
import Image from "next/image";
import { blogs } from "@/src/data/pages/blog.data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

// ✅ Required for static export - generates all blog routes at build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ Generate SEO metadata dynamically per blog
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return { title: "Blog Not Found", description: "No blog found." };

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      images: blog.image ? [{ url: blog.image }] : undefined,
      type: "article",
    },
  };
}

export default async function Page({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-0"
      customPaddings
      id="blog-page"
      className="py-12 sm:py-16"
    >
      <article className="px-4 py-8 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-3/4 lg:w-1/2 flex flex-col gap-[5px]">
          <Link
            href="/blogs"
            className="mb-4 text-indigo-600 hover:text-indigo-800 font-medium"
          >
            <ArrowLeftIcon className="inline-block w-5 h-5 mr-1 -mt-1" /> Back to Blogs
          </Link>

          <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            {blog.title}
          </h1>
          <p className="text-base text-gray-500 mb-6">{blog.date}</p>

          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              width={800}
              height={400}
              className="object-cover w-full h-64 bg-center mb-8"
            />
          )}
        </div>

        <div className="w-full mx-auto md:w-3/4 lg:w-1/2">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {block.text}
                  </p>
                );
              case "heading":
                return (
                  <h2 key={index} className="mt-8 mb-4 text-2xl font-semibold text-gray-900">
                    {block.text}
                  </h2>
                );
              case "list":
                return (
                  <ul key={index} className="list-disc pl-6 mb-4 text-gray-700">
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>
      </article>
    </Section>
  );
}