import Card from "../Fragment/Card";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import { useState, useRef } from "react";
import Film1 from "../../Data/Film1";
const CardLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Melanjutkan nonton Flm

  const ITEM = 360;
  const [position, setPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newPosition = position + scrollAmount;
    setPosition(newPosition);
    containerRef.current.scrollLeft = newPosition;
  };

  return (
    <>
      <div className="relative px-2 lg:mt-16 mt-10">
        <h1 className="text-xl lg:text-3xl mt-6 lg:mb-6 font-bold text-white text-start ml-6 lg:ml-10">{title}</h1>
        <div className="w-[100%] lg:px-10 mx-auto flex items-center p-4">
          <div ref={containerRef} className="flex gap-5 overflow-x-hidden  scroll-smooth ">
            {Film1.map((Film1) => (
              <div key={Film1.id}>
                <Card image={Film1.image} name={Film1.name} rating={Film1.rating} series={Film1.series} />
              </div>
            ))}
          </div>
          <Left handleClickLeft={() => handleScroll(-ITEM)} />
          <Right handleClickRight={() => handleScroll(ITEM)} />
        </div>
      </div>
    </>
  );
};

export default CardLayout;
