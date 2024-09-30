const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor, children, name } = props;
  return (
    <>
      <label htmlFor={htmlFor} name={name} className="block mb-3 text-md lg:text-lg font-light font-medium text-white">
        {children}
      </label>
    </>
  );
};
export default Label;
