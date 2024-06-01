const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`py-3 pr-4 border-b border-neutral3 w-full placeholder:text-base  ${
          placeholder === "checkbox" && "text-lg"
        } max-sm:placeholder:text-sm placeholder:text-neutral4 focus:outline-none`}
      />
    </>
  );
};

export default Input;
