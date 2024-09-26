import { useRef, useState } from "react";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import CardFilm1 from "../Fragment/CardFilm";
import Film3 from "../../Data/Film3";

const FilmLayout1 = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Film Trending

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
            {Film3.map((Film3) => (
              <div key={Film3.id}>
                <CardFilm1 image={Film3.image} name={Film3.name} top={Film3.top} series={Film3.series} />
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
