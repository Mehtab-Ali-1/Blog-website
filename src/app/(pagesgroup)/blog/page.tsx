"use client";
import Image from "next/image";
import Link from "next/link";


const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js framework and build modern web applications with React.",
    slug: "getting-started-with-nextjs",
    date: "2024-01-15",
    author: "John Doe",
    image: "/pic4.jpeg"
  },
  {
    id: 2, 
    title: "Mastering Tailwind CSS",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "mastering-tailwind-css", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic5.jpg"
  },
  {
    id: 3, 
    title: "Mastering CSS",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "mastering-CSS", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic12.jpg"
  },
  {
    id: 4, 
    title: "Mastering HTML",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "Mastering-HTML", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic7.jpg"
  },
  {
    id: 5, 
    title: "Mastering TypeScript",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "Mastering-TypeScript", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic8.jpg"
  },
  {
    id: 6, 
    title: "Mastering Javascript",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "Mastering-Javascript", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic10.jpg"
  },
  {
    id: 7, 
    title: "Mastering ShadcnUI",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "Mastering-ShadcnUI", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic9.jpg"
  },
  {
    id: 8, 
    title: "Mastering React",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "Mastering-React", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic11.jpg"
  },
  {
    id: 9, 
    title: "Mastering React Native",
    description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
    slug: "Mastering-React-Native", 
    date: "2024-01-12",
    author: "Jane Smith",
    image: "/pic6.jpg"
  },
];
  // Add more blog posts as needed

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-56">
              <Image
                width={200}
                height={200}
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 dark:border-2">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm dark:text-gray-500 text-gray-600">{blog.date}</p>
                <p className="text-sm font-medium text-blue-600">{blog.author}</p>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white hover:text-blue-600">
                <Link href={`/blog/${blog.slug}`}>
                  {blog.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {blog.description}
              </p>
              
              <Link 
                href={`/blogpost/${blog.slug}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>


      <div className="mb-11"></div>
    </div>
  );
};

export default Blog;
