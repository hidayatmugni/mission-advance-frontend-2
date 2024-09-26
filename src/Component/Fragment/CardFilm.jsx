/* eslint-disable react/no-children-prop */
import Episode from "../Element/Nametag/Episode";
import TopRate from "../Element/Nametag/Top";

const CardFilm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, series } = props;
  return (
    // persembahan series Chill
    <>
      <div className="relative w-[140px] lg:w-[240px] lg:ml-2">
        <div {...(props === "Premium" && { className: "relative" })} {...props}>
          <div className="">
            <img src={image} className="w-full" alt="" />
            {series === "Episode Baru" ? <Episode variant="absolute bg-blue-700 top-3 left-4" children={series} /> : null}
            {series === "Premium" ? <Episode variant="absolute bg-yellow-500 top-3 left-3" children={series} /> : null}
            {series === "Top 10" ? <TopRate variant="absolute bg-red-700 top-0 right-3" children={series} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFilm;
