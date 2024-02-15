import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1448803573/photo/christmas-composition-gifts-craft-and-golden-decorations-on-white-background-flat-lay-top.jpg?s=612x612&w=0&k=20&c=ts9IKebusMRfaq6QaFaRuPkA9P-JBH45uTOz3gE1fGg=")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container mx-auto p-20">
        <SectionHeader heading="Contact Us" />
        <div className="mt-8">
          <p className="text-xl">
            We welcome your questions, feedback, and inquiries! Contact us using
            the information provided below. Your input matters to us, and we're
            here to assist you.
          </p>
          <div className="mt-4">
            <p className="text-lg">Email: graceful-gazette@fashion.com</p>
            <p className="text-lg">Phone: +01234567890</p>
            <p className="text-lg">
              Address: 12/7 Rose-Street, Manchester, London
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
