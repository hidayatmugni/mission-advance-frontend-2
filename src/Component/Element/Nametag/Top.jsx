const TopRate = (props) => {
  // eslint-disable-next-line react/prop-types
  const { variant = "bg-none", children } = props;
  return (
    <>
      <h1 className={`${variant} h-18 w-12  text-white  bg-red-700 rounded-tr-md rounded-bl-md font-mdeium text-xl lg:text-md text-center p-2 absolute top-0 right-[45px]`}>{children}</h1>
    </>
  );
};

export default TopRate;
