import { Link } from "react-router-dom";

const BlogCard = ({ blog, catid }) => {
  return (
    <div className="w-full p-5 rounded-2xl bg-slate-50 flex flex-col gap-5 shadow-lg">
      <Link
        to={`/categories${catid}/${blog.id} `}
        className="w-full aspect-[5/4] overflow-hidden rounded-xl group"
      >
        <img
          src={blog?.image}
          alt={blog?.title}
          className="w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
        />
      </Link>
      <div className="flex flex-col gap-3 antialiased">
        <h5 className="text-2xl font-medium">{blog.title}</h5>
        <p className="text-sm text-slate-500">
          {blog.description.substring(0, 50)}...
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Link to={`/categories${catid}/${blog.id} `} className="btn">
          Read More
        </Link>
        <button className="btn_secondary">Save Blog</button>
      </div>
    </div>
  );
};

export default BlogCard;
