import { useRef, useState } from "react";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import CardFilm1 from "../Fragment/CardFilm";

const FilmLayout1 = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Film Trending
  const Films2 = [
    {
      id: 11,
      image: "../assets/number/Number=11.png",
      top: "Top 10",
    },
    {
      id: 12,
      image: "../assets/number/Number=12.png",
      top: "Top 10",
    },
    {
      id: 13,
      image: "../assets/number/Number=13.png",
      top: "Top 10",
    },
    {
      id: 14,
      image: "../assets/number/Number=14.png",
      top: "Top 10",
    },
    {
      id: 15,
      image: "../assets/number/Number=15.png",
      top: "Top 10",
    },
    {
      id: 16,
      image: "../assets/number/Number=16.png",
      top: "Top 10",
    },
    {
      id: 17,
      image: "../assets/number/Number=17.png",
      top: "Top 10",
    },
    {
      id: 18,
      image: "../assets/number/Number=18.png",
      top: "Top 10",
    },
    {
      id: 19,
      image: "../assets/number/Number=19.png",
      top: "Top 10",
    },
    {
      id: 20,
      image: "../assets/number/Number=20.png",
      top: "Top 10",
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
        <h1 className="text-white font-bold text-xl lg:text-4xl text-start ml-6 lg:ml-12">{title}</h1>
        <div className="flex items-center p-6 lg:p-12 md:p-8  relative">
          <div ref={containerRef} className="flex gap-2 overflow-x-hidden scroll-smooth ">
            {Films2.map((Films2) => (
              <div key={Films2.id}>
                <CardFilm1 image={Films2.image} name={Films2.name} top={Films2.top} episode={Films2.episode} id={Films2.id} />
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

export default FilmLayout1;
