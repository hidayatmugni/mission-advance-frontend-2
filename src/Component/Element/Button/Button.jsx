const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, variant } = props;
  return (
    <>
      <button className={`${variant} text-white font-bold py-3 px-4 rounded-3xl font-light mt-6 `} type="submit">
        {children}
      </button>
    </>
  );
};

export default Button;
