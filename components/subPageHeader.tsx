interface SubPageHeaderProps {
  title: string;
  claim: string;
  description: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = ({
  title,
  claim,
  description,
}) => {
  return (
    <section className="w-full h-[600px] px-[10%] flex flex-col items-start justify-between bg-black">
      <div className="w-[1000px] h-full flex flex-col justify-center">
        <h1 className="text-lobster text-left text-2xl uppercase font-bold mt-20">
          {title}
        </h1>
        <p className="text-white text-left text-6xl font-bold mt-5">{claim}</p>
        <p className="text-white text-left text-xl mt-10">{description}</p>
      </div>
    </section>
  );
};

export default SubPageHeader;
