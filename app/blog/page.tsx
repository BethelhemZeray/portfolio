import BlogCard from "../components/BlogCard";
import WrapCard from "../components/WrapCard";
import { blogs } from "../constants/blog";


const Blog = () => {
  return (
    <section id="blog" className="py-12 px-4 bg-gray-900">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold text-white-900 text-center">Blog</h2>
        <p className="text-white-600 text-center mt-2">
          Read my latest thoughts and tutorials.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:grid-cols-4 mt-6">
          {blogs.map((blog, index) => (
            <WrapCard key={index}><BlogCard key={index} blog={blog} /></WrapCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
