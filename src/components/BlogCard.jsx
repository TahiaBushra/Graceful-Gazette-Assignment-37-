import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { motion } from "framer-motion";

const BlogCard = ({ blog, catid, index }) => {
  const [hasBeenSaved, setHasBeenSaved] = useState(false);
  const [state, dispatch] = useContext(BlogContext);

  useEffect(() => {
    const isExist = state.blogs.some((bl) => bl.id === blog.id);

    if (isExist) {
      setHasBeenSaved(true);
    } else {
      setHasBeenSaved(false);
    }
  }, [state]);

  return (
    <motion.div
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: index * 0.25 }}
      className="w-full p-5 rounded-2xl bg-slate-50 flex flex-col gap-5 shadow-lg"
    >
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
        <Link to={`/categories${catid}/${blog.id} `} className="btn_read">
          Read More
        </Link>
        {!hasBeenSaved && (
          <button
            onClick={() =>
              dispatch({ type: "SAVE", payload: { ...blog, catid } })
            }
            className="btn_secondary"
          >
            Save Blog
          </button>
        )}
        {hasBeenSaved && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE", payload: { ...blog, catid } })
            }
            className="btn_remove"
          >
            Remove Blog
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
