/* eslint-disable react/no-children-prop */
import Episode from "../Element/Nametag/Episode";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, rating, series } = props;

  return (
    <>
      <div>
        <div className="relative w-[320px] lg:w-[360px] rounded-3xl ">
          <div className="relative max-w-[360px]  lg:w-[360px] ">
            <img src={image} className="w-full rounded-xl lg:h-[200px]  " alt="" />
            {series === "Episode Baru" ? <Episode variant="absolute bg-blue-700 top-3 left-3" children={series} /> : null}
            {series === "Premium" ? <Episode variant="absolute bg-yellow-500 top-3 left-3" children={series} /> : null}
            <div className="absolute flex justify-between left-5 lg:left-6 right-2 bottom-4 ">
              <p className="text-md lg:text-xl text-white">{name}</p>
              <p className="text-md lg:text-xl text-white">⭐{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
