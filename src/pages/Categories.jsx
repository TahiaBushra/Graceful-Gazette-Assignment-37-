import { Link } from "react-router-dom";
import Overlay from "../components/Overlay";
import { categories } from "../data/categories";
import { useState } from "react";

const Categories = () => {
  const [expandCategory, setExpandCategory] = useState(0);
  return (
    <div className="w-screen h-screen flex">
      {categories.map((category, index) => (
        <Link
          onMouseOver={() => setExpandCategory(index)}
          key={category.id}
          className={`h-full ${
            index === expandCategory ? "w-[calc(100vw-60vw)]" : "w-[20vw]"
          } overflow-hidden relative`}
        >
          <img
            src={category.banner}
            alt={category.title}
            className="w-full h-full object-cover"
          />
          <Overlay />
          <div className="z-[2] absolute top-0 right-0 bottom-0 w-full h-full p-10 flex flex-col gap-5 items-center justify-center text-center text-slate-50">
            <h2 className="text-4xl font-semibold antialiased">
              {category.title}
            </h2>
            <p className="hidden">{category.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
