const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, placeholder, name } = props;
  return <input type={type} name={name} placeholder={placeholder} autoComplete="off" className="p-2 lg:p-3 rounded-3xl bg-transparent text-white w-full border border-white" />;
};
export default Input;
