import SectionHeader from "../components/SectionHeader";

const Contact = () => {
  return (
    <div className="container mx-auto p-20">
      <SectionHeader heading="Contact Us" />
      <div className="mt-8">
        <p className="text-lg">
          We'd love to hear from you! If you have any questions, feedback, or
          inquiries, please don't hesitate to reach out to us using the contact
          information below.
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
  );
};

export default Contact;
