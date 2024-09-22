import CardFilm from "../Fragment/CardFilm";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import { useState, useRef } from "react";

const FilmLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  const Films1 = [
    {
      id: 1,
      image: "../assets/number/Number=1.png",
      episode: "Episode Baru",
    },
    {
      id: 2,
      image: "../assets/number/Number=2.png",
      premium: "Premium",
    },
    {
      id: 3,
      image: "../assets/number/Number=3.png",
      top: "Top 10",
    },
    {
      id: 4,
      image: "../assets/number/Number=4.png",
      premium: "Premium",
    },
    {
      id: 5,
      image: "../assets/number/Number=5.png",
      top: "Top 10",
    },
    {
      id: 6,
      image: "../assets/number/Number=6.png",
      episode: "Episode Baru",
    },
    {
      id: 7,
      image: "../assets/number/Number=7.png",
      episode: "Episode Baru",
    },
    {
      id: 8,
      image: "../assets/number/Number=8.png",
      episode: "Episode Baru",
    },
    {
      id: 9,
      image: "../assets/number/Number=9.png",
      premium: "Premium",
    },
    {
      id: 10,
      image: "../assets/number/Number=10.png",
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
        <h1 className="text-white font-semibold text-xl lg:text-3xl text-start ml-6 lg:ml-12">{title}</h1>
        <div className="flex items-center p-6 lg:p-12 md:p-8 relative">
          <div ref={containerRef} className="flex gap-2 overflow-x-hidden scroll-smooth ">
            {Films1.map((Films1) => (
              <div key={Films1.id}>
                <CardFilm image={Films1.image} top={Films1.top} episode={Films1.episode} id={Films1.id} premium={Films1.premium} />
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

export default FilmLayout;
