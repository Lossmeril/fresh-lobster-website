const Footer = () => {
  return (
    <footer className="w-full bg-lobster text-white py-4 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4">
        <div className="">© {new Date().getFullYear()}, Michal Špitálský</div>
      </div>
    </footer>
  );
};

export default Footer;
