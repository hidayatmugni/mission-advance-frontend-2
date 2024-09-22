/* eslint-disable react/no-children-prop */
import Episode from "../Element/Nametag/Episode";
import TopRate from "../Element/Nametag/Top";

const CardFilm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { image, episode, premium, top } = props;
  return (
    // persembahan series Chill
    <>
      <div>
        <div {...(props === "Premium" && { className: "relative" })} className="relative w-[220px]" {...props}>
          <div className="">
            <img src={image} className="" alt="" />
            {episode === "Episode Baru" ? <Episode variant="absolute bg-blue-700 top-3 left-4" children={episode} /> : null}
            {premium === "Premium" ? <Episode variant="absolute bg-yellow-500 top-3 left-3" children={premium} /> : null}
            {top === "Top 10" ? <TopRate variant="absolute bg-red-700 top-0 right-3" children={top} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFilm;
