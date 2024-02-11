import { useParams } from "react-router-dom";
import { categories } from "../data/categories";
import NotFound from "./NotFound";
import SectionHeader from "../components/SectionHeader";
import BlogCard from "../components/BlogCard";

const CategoryItem = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto justify-center items-center text-center">
        {categoryItem.items.length > 0 &&
          categoryItem.items.map((item) => (
            <BlogCard key={item.id} blog={item} catid={categoryItem.url} />
          ))}
      </div>
    </div>
  );
};

export default CategoryItem;
