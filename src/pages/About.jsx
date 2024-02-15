import SectionHeader from "../components/SectionHeader";

const About = () => {
  return (
    <div className="container mx-auto px-10 py-10">
      <SectionHeader heading="About Us" />
      <div className="mt-8">
        <p className="text-lg font-semibold leading-relaxed">
          Welcome to Graceful Gazette, your ultimate destination for fashion
          inspiration and trends. Founded with a passion for elegance and
          sophistication, we curate a diverse array of content to cater to every
          style aficionado. From haute couture to street style, our platform
          celebrates the artistry and creativity of the fashion world. Dive into
          our meticulously crafted articles, editorials, and guides that explore
          the latest runway collections, beauty tips, and timeless wardrobe
          essentials. Join us on a journey where every click sparks a sense of
          glamour and empowerment, inspiring you to express your unique identity
          with grace and confidence.
        </p>
        <p className="text-lg mt-5 font-semibold leading-relaxed">
          At Graceful Gazette, our team crafts premium fashion content, covering
          trends, style tips, and industry insights. We aim to captivate and
          inform, ensuring your fashion journey is both delightful and
          enriching.
        </p>
      </div>
    </div>
  );
};

export default About;
