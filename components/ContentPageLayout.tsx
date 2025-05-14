import { ReactNode } from "react";

interface ContentPageLayoutProps {
  title: string;
  children: ReactNode;
  imageUrl?: string;
}

export default function ContentPageLayout({ title, children, imageUrl }: ContentPageLayoutProps) {
  return (
    <section className="container mx-auto py-10 px-4 md:px-6 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-center text-gray-800 dark:text-gray-100">
          {title}
        </h1>
        {imageUrl && (
          <div className="mb-10 aspect-video bg-muted flex items-center justify-center overflow-hidden rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
            <img src={imageUrl} alt={title} className="object-contain w-full h-full" />
          </div>
        )}
        <article 
          className="prose prose-slate dark:prose-invert max-w-none 
                     lg:prose-lg xl:prose-xl 
                     prose-headings:font-semibold prose-headings:tracking-tight prose-headings:mt-10 prose-headings:mb-4 
                     prose-p:leading-relaxed prose-p:my-4 
                     prose-li:my-2 
                     prose-img:rounded-lg prose-img:shadow-md prose-img:border prose-img:border-gray-200 dark:prose-img:border-gray-700
                     prose-a:text-blue-600 hover:prose-a:text-blue-500 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
                     prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded dark:prose-code:bg-gray-800 prose-code:text-sm
                     prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400"
        >
          {children}
        </article>
      </div>
    </section>
  );
}

