interface ButtonProps {
  children: React.ReactNode;
  link: string;
  inverse: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, link, inverse }) => {
  return (
    <a href={link}>
      <div
        className={`px-6 py-2 border-2 ${
          !inverse
            ? "bg-lobster border-lobster text-white hover:bg-white hover:border-lobster hover:text-lobster transition-all duration-300"
            : ""
        }`}
      >
        {children}
      </div>
    </a>
  );
};

export default Button;
