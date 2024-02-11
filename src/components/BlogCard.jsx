import { Link } from "react-router-dom";

const BlogCard = ({ blog, catid }) => {
  return (
    <div className="w-full p-5 rounded-2xl bg-stone-100 flex flex-col gap-5">
      <div className="w-full aspect-[5/4] overflow-hidden rounded-xl">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 antialiased">
        <h5 className="text-2xl font-medium">{blog.title}</h5>
        <p className="text-sm text-slate-500">
          {blog.description.substring(0, 50)}...
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Link to={` `} className="btn">
          Read More
        </Link>
        <button className="btn_secondary">Save Blog</button>
      </div>
    </div>
  );
};

export default BlogCard;
