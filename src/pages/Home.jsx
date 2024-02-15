import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative">
      <Slider />
      {/* Hero Section */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] flex flex-col gap-5 items-center">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="text-6xl text-white font-bold text-center antialiased leading-tight py-8"
          >
            Graceful Gazette: Unveiling the Artistry of Fashion"
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <Link to="/categories" className="btn">
              Explore Categories
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Social Links */}
      <div className="absolute bottom-10 right-10 z-[3] flex items-center justify-center gap-5 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0.5 }}
          className="hidden md:flex items-center gap-5"
        >
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            className="hover:scale-125 transition duration-300 ease-in-out"
          >
            <Facebook color="dodgerblue" size={30} />
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            className="hover:scale-125 transition duration-300 ease-in-out"
          >
            <Instagram color="violet" size={30} />
          </Link>
          <Link
            to="https://twitter.com/i/flow/login"
            target="_blank"
            className="hover:scale-125 transition duration-300 ease-in-out"
          >
            <Twitter color="deepskyblue" size={30} />
          </Link>
          <Link
            to="https://www.linkedin.com/login"
            target="_blank"
            className="hover:scale-125 transition duration-300 ease-in-out"
          >
            <Linkedin color="aliceblue" size={30} />
          </Link>
          <Link
            to="https://www.youtube.com/"
            target="_blank"
            className="hover:scale-125 transition duration-300 ease-in-out"
          >
            <Youtube color="red" size={30} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
