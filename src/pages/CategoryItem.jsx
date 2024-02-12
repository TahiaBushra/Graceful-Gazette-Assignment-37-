import { useParams } from "react-router-dom";
import { categories } from "../data/categories";
import NotFound from "./NotFound";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";
import { useState } from "react";

const CategoryItem = () => {
  const [allItemAppear, setAllItemAppear] = useState(false);
  const { catid } = useParams();
  const categoryItem = categories.find((item) => item.url === "/" + catid);
  if (!categoryItem) {
    return <NotFound />;
  }
  return (
    <div className="container mx-auto p-20">
      <SectionHeader
        heading={categoryItem.title}
        subHeading={categoryItem.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto justify-center items-center text-center mb-10">
        {categoryItem.items.length > 0 &&
          !allItemAppear &&
          categoryItem.items
            .slice(0, 6)
            .map((item) => (
              <BlogCard key={item.id} blog={item} catid={categoryItem.url} />
            ))}
        {categoryItem.items.length > 0 &&
          allItemAppear &&
          categoryItem.items.map((item) => (
            <BlogCard key={item.id} blog={item} catid={categoryItem.url} />
          ))}
      </div>
      {!allItemAppear && (
        <div className="flex justify-center">
          <button onClick={() => setAllItemAppear(true)} className="btn_more">
            Show More
          </button>
        </div>
      )}
      {allItemAppear && (
        <div className="flex justify-center">
          <button onClick={() => setAllItemAppear(false)} className="btn_less">
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
