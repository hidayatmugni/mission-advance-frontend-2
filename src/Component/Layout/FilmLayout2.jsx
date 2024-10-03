import { useRef, useState } from "react";
import CardFilm2 from "../Fragment/CardFilm";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import Films3 from "../../Data/Film4";

const FilmLayout2 = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Persembahan series chill

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
                <CardFilm2 image={Films3.image} series={Films3.series} />
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
