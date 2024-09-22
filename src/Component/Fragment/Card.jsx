/* eslint-disable react/no-children-prop */
import Episode from "../Element/Nametag/Episode";

const Card = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, name, rating, episode } = props;

  return (
    <>
      <div>
        <div className="relative w-[220px] lg:w-[320px] bg-gray-800">
          <div className="relative mt-3">
            <img src={image} className="rounded-xl w-full " alt="" />
            {episode === "Episode Baru" ? <Episode variant="absolute bg-blue-700 top-3 left-3" children={episode} /> : null}
            {episode === "Premium" ? <Episode variant="absolute bg-yellow-500 top-3 left-3" children={episode} /> : null}
            <div className="absolute flex justify-between left-5 lg:left-6 right-2 bottom-4">
              <p className="text-lg lg:text-xl text-white">{name}</p>
              <p className="text-xl text-white">⭐{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
