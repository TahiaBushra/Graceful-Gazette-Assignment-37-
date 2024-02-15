import SectionHeader from "../components/SectionHeader";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1397595348/photo/beauty-concept-top-view-photo-of-gold-rings-eyeshadow-makeup-brushes-cosmetic-bag-hairpins.jpg?s=612x612&w=0&k=20&c=qQXT5b0DrBp0umD3NaEuej0GZRCB4M8YJBr1ck8qXQY=")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="mx-auto p-20">
        <SectionHeader heading="About Us" />
        <div className="mt-8">
          <p className="text-lg leading-relaxed">
            Welcome to Graceful Gazette, your ultimate destination for fashion
            inspiration and trends. Founded with a passion for elegance and
            sophistication, we curate a diverse array of content to cater to
            every style aficionado. From haute couture to street style, our
            platform celebrates the artistry and creativity of the fashion
            world. Dive into our meticulously crafted articles, editorials, and
            guides that explore the latest runway collections, beauty tips, and
            timeless wardrobe essentials. Join us on a journey where every click
            sparks a sense of glamour and empowerment, inspiring you to express
            your unique identity with grace and confidence.
          </p>
          <p className="text-lg mt-5 leading-relaxed">
            At Graceful Gazette, our team crafts premium fashion content,
            covering trends, style tips, and industry insights. We aim to
            captivate and inform, ensuring your fashion journey is both
            delightful and enriching.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
