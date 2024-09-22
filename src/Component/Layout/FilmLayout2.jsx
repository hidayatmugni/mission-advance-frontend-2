import { useRef, useState } from "react";
import CardFilm2 from "../Fragment/CardFilm";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";

const FilmLayout2 = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Persembahan series chill
  const Films3 = [
    {
      id: 21,
      image: "../assets/number/Number=21.png",
      top: "Top 10",
    },
    {
      id: 22,
      image: "../assets/number/Number=22.png",
      episode: "Episode Baru",
    },
    {
      id: 23,
      image: "../assets/number/Number=23.png",
      top: "Top 10",
    },
    {
      id: 24,
      image: "../assets/number/Number=24.png",
      premium: "Premium",
    },
    {
      id: 25,
      image: "../assets/number/Number=25.png",
      top: "Top 10",
    },
    {
      id: 26,
      image: "../assets/number/Number=26.png",
      episode: "Episode Baru",
    },
    {
      id: 27,
      image: "../assets/number/Number=27.png",
      episode: "Episode Baru",
    },
    {
      id: 28,
      image: "../assets/number/Number=28.png",
      episode: "Episode Baru",
    },
    {
      id: 29,
      image: "../assets/number/Number=29.png",
      premium: "Premium",
    },
    {
      id: 30,
      image: "../assets/number/Number=30.png",
      episode: "Episode Baru",
    },
  ];
  const ITEM = 200;
  const [position, setPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newPosition = position + scrollAmount;
    setPosition(newPosition);
    containerRef.current.scrollLeft = newPosition;
  };

  return (
    <>
      <div className="mt-10 realtive">
        <h1 className="text-white font-semibold text-xl lg:text-3xl text-start ml-6 lg:ml-12 ">{title}</h1>
        <div className="flex items-center p-6 lg:p-12 md:p-8 relative">
          <div ref={containerRef} className="flex gap-2 overflow-x-hidden scroll-smooth ">
            {Films3.map((Films3) => (
              <div key={Films3.id}>
                <CardFilm2 image={Films3.image} premium={Films3.premium} top={Films3.top} episode={Films3.episode} id={Films3.id} />
              </div>
            ))}
          </div>
          <Left handleClickLeft={() => handleScroll(-ITEM)} variant="absolute"></Left>
          <Right handleClickRight={() => handleScroll(ITEM)} variant="absolute"></Right>
        </div>
      </div>
    </>
  );
};
export default FilmLayout2;
