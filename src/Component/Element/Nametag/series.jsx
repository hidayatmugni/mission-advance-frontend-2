const series = (props) => {
  const { variant = "bg-none", children } = props;
  return (
    <>
      <h1 className={`${variant} text-white  rounded-3xl text-xs lg:text-sm  text-center p-2 absolute top-3 left-3 lg:top-4 lg:left-4`}>{children}</h1>
    </>
  );
};

export default series;
