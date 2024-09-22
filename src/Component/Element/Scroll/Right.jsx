const Right = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleClickRight, variant } = props;
  return (
    <>
      <img src="../assets/arrow-right.png" alt="" className={`${variant} absolute right-2 lg:right-6 w-10 lg:w-12`} onClick={handleClickRight} />
    </>
  );
};

export default Right;
