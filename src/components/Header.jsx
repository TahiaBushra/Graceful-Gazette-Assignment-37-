import { Home } from "lucide-react";
import { Link, useResolvedPath } from "react-router-dom";

const Header = () => {
  const { pathname } = useResolvedPath();
  return (
    <div
      class={`flex fixed items-center z-[100] container left-1/2 -translate-x-1/2 top-10 w-full px-20 ${
        pathname === "/" ? "justify-center" : "justify-between "
      }`}
    >
      <div className={`${pathname === "/" ? "hidden" : "inline-block"}`}>
        <div className="flex backdrop-blur-lg rounded-full bg-white/80 border overflow-hidden">
          <div className="bg-transparent rounded-full w-20 h-auto">
            <img
              src="/src/assets/images/360_F_212421503_4JHrc9KSU6fQIPv18KIl5i2QgvvQydit-removebg-preview.png"
              alt="purple feather"
              className="w-full h-full object-cover rounded-full opacity-80"
            />
          </div>
          <div className="flex flex-col antialiased truncate pr-5 tracking-tighter">
            <Link className="text-3xl font-bold text-fuchsia-500 text-center">
              G<span className="text-pink-500">G</span>
            </Link>
            <p className="text-pink-500 font-semibold text-lg">
              Graceful <span className="text-fuchsia-500">Gazette</span>
            </p>
          </div>
        </div>
      </div>
      <button className="w-10 aspect-square bg-white/80 border backdrop-blur-lg rounded-full flex items-center justify-center text-emerald-700">
        <Home absoluteStrokeWidth size={25} />
      </button>
    </div>
  );
};

export default Header;
