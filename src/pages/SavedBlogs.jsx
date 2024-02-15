import { useContext } from "react";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import { BlogContext } from "../contexts/BlogContext";

const SavedBlogs = () => {
  const [state, dispatch] = useContext(BlogContext);
  return (
    <div className="container mx-auto p-20">
      <SectionHeader
        heading={`Saved Items (${state?.blogs?.length})`}
        subHeading="Explore your curated collection of saved blogs, each a treasure trove of insights and inspiration. Delve into topics ranging from lifestyle and travel to technology and beyond. Your personalized library awaits, filled with handpicked gems ready to spark your curiosity and enrich your journey."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {state?.blogs?.length > 0 &&
          state.blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              catid={blog.catid}
            />
          ))}
      </div>
    </div>
  );
};

export default SavedBlogs;
