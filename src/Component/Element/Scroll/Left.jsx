const Left = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleClickLeft, variant } = props;
  return (
    <>
      <img src="../assets/arrow-left.png" alt="" className={`${variant} absolute left-2 lg:left-6  w-10 lg:w-12`} onClick={handleClickLeft} />
    </>
  );
};

export default Left;
