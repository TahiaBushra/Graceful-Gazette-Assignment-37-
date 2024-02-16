import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeX,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { useContext, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";

const navItems = [
  { label: "Home", url: "/" },
  { label: "Categories", url: "/categories" },
  { label: "Saved Items", url: "/saved" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];
const Header = () => {
  const [navAppear, setNavAppear] = useState(false);
  const [state, dispatch] = useContext(BlogContext);
  const { pathname } = useResolvedPath();
  return (
    <>
      <div
        className={`flex overflow-hidden fixed items-center z-[100] container left-1/2 -translate-x-1/2 top-10 w-full px-5 sm:px-20 ${
          pathname === "/" ? "justify-center" : "justify-between "
        }`}
      >
        <motion.div
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <Link
            to="/"
            className={`${pathname === "/" ? "hidden" : "inline-block"}`}
          >
            <div className="flex backdrop-blur-lg rounded-full border overflow-hidden bg">
              <div className="rounded-2xl w-52 h-auto bg-gray-900 cursor-pointer">
                <img
                  src="/public/assets/images/New_Project-removebg-preview (1).png"
                  alt="fashion pic"
                  className="w-full h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.button
          initial={{ y: "-100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          onClick={() => setNavAppear(!navAppear)}
          className="aspect-square w-14 border backdrop-blur-lg rounded-full flex items-center justify-center bg-zinc-50 text-gray-900 hover:scale-125 transition duration-300 ease-in-out"
        >
          <Home absoluteStrokeWidth size={25} />
        </motion.button>
      </div>
      <AnimatePresence>
        {navAppear && (
          <>
            <div
              onClick={() => setNavAppear(false)}
              className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-transparent z-[100]"
            ></div>
            <motion.div
              onClick={() => setNavAppear(false)}
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="fixed right-0 top-0 bottom-0  w-screen sm:w-[50vw] lg:w-[35vw] xl:w-[25vw] h-full bg-zinc-50 z-[101] shadow-2xl"
            >
              <button
                onClick={() => setNavAppear(false)}
                className="top-5 right-5 absolute z-[102] hover:scale-125 transition duration-300 ease-in-out"
              >
                <BadgeX absoluteStrokeWidth size={25} />
              </button>
              <div className="px-5 pt-14 flex flex-col gap-5 items-start">
                <p className="uppercase text-sm font-semibold tracking-widest text-gray-400 border-b w-full pb-2.5">
                  Navigations
                </p>
                {navItems.map((item, index) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    className="text-3xl font-semibold text-gray-700 overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.125 * index,
                      }}
                    >
                      {item.label}{" "}
                      {item.url === "/saved" && `(${state?.blogs?.length})`}
                    </motion.div>
                  </Link>
                ))}
              </div>
              <div className="pb-5 px-5 mt-10 sm:mt-40 flex flex-col gap-5 items-start">
                <p className="uppercase text-sm font-semibold tracking-widest text-gray-400 border-b w-full pb-2.5">
                  Socials
                </p>
                <div className="flex overflow-hidden items-center gap-5 text-gray-700">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="hidden md:flex items-center gap-5"
                  >
                    <Link
                      to="/"
                      target="_blank"
                      className="hover:scale-125 transition duration-300 ease-in-out"
                    >
                      <Facebook color="dodgerblue" size={24} />
                    </Link>
                    <Link
                      to="/"
                      target="_blank"
                      className="hover:scale-125 transition duration-300 ease-in-out"
                    >
                      <Instagram color="violet" size={24} />
                    </Link>
                    <Link
                      to="/"
                      target="_blank"
                      className="hover:scale-125 transition duration-300 ease-in-out"
                    >
                      <Twitter color="deepskyblue" size={24} />
                    </Link>
                    <Link
                      to="/"
                      target="_blank"
                      className="hover:scale-125 transition duration-300 ease-in-out"
                    >
                      <Linkedin size={24} />
                    </Link>
                    <Link
                      to="/"
                      target="_blank"
                      className="hover:scale-125 transition duration-300 ease-in-out"
                    >
                      <Youtube color="red" size={24} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
