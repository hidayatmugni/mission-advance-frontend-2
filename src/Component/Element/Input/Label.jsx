const Label = (props) => {
  // eslint-disable-next-line react/prop-types
  const { htmlFor, children, name } = props;
  return (
    <>
      <label htmlFor={htmlFor} name={name} className="block mb-3 text-md lg:text-lg font-light text-white font-medium text-gray-900">
        {children}
      </label>
    </>
  );
};
export default Label;
