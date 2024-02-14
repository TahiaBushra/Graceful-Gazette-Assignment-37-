import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Home = () => {
  return (
    <div className="relative">
      <Slider />
      {/* Hero Section */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] flex flex-col gap-5 items-center">
        <h1 className="text-6xl text-white font-bold text-center antialiased leading-tight py-8">
          Graceful Gazette: Unveiling the Artistry of Fashion"
        </h1>
        <Link to="/categories" className="btn">
          Explore Categories
        </Link>
      </div>
      {/* Social Links */}
      <div className="absolute bottom-10 right-10 z-[3] flex items-center justify-center gap-5">
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
      </div>
    </div>
  );
};

export default Home;
