import { useEffect, useState } from "react";
import Overlay from "./Overlay";

const slides = [
  "https://images.pexels.com/photos/4050387/pexels-photo-4050387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2897035/pexels-photo-2897035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/264591/pexels-photo-264591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Slider = () => {
  const [curImg, setCurImg] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (curImg === slides.length - 1) {
        setCurImg(0);
      } else {
        setCurImg(curImg + 1);
      }
    }, 5000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [curImg]);
  return (
    <div className="w-screen h-screen relative">
      <img
        src={slides[curImg]}
        alt="Slide img"
        className="w-full h-full object-cover"
      />
      <Overlay />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-[2] flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            onClick={() => setCurImg(index)}
            key={index}
            className={`${
              index === curImg ? "w-7" : "w-3"
            } h-3 rounded-full bg-white/70`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
