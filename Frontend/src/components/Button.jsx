const Button = ({ content }) => {
  return (
    <button className="w-full py-3 bg-neutral7 font-semibold max-sm:text-sm text-white hover:bg-neutral7/90 transition-all duration-300 rounded-md">
      {content}
    </button>
  );
};

export default Button;
