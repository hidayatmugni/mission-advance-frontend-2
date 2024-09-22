const Episode = (props) => {
  // eslint-disable-next-line react/prop-types
  const { variant = "bg-none", children } = props;
  return (
    <>
      <h1 className={`${variant} text-white  rounded-3xl font-md text-sm lg:text-md text-center p-2 absolute top-3 left-3`}>{children}</h1>
    </>
  );
};

export default Episode;
