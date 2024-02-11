const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto max-w-xl flex flex-col gap-5 text-center items-center mb-10 antialiased">
      <h4 className="text-4xl font-semibold">{heading}</h4>
      <p className="text-md text-slate-600">{subHeading}</p>
    </div>
  );
};

export default SectionHeader;
