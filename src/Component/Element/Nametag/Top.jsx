const TopRate = (props) => {
  // eslint-disable-next-line react/prop-types
  const { variant = "bg-none", children } = props;
  return (
    <>
      <h1 className={`${variant} h-12 w-8 lg:h-12 lg:h-16 lg:w-10 lg:text-xl  text-white  bg-red-700 rounded-tr-md rounded-bl-md font-light text-sm lg:text-md text-center absolute top-0 right-[15px]`}>{children}</h1>
    </>
  );
};

export default TopRate;
