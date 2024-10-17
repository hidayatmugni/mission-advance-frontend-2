import Card from "../Fragment/Card";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import { useState, useRef, useEffect } from "react";
import useApi from "../../stores/useApi";

const CardLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Melanjutkan nonton Flm
  const { fetchData, data } = useApi();
  const ITEM = 360;
  const [position, setPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newPosition = position + scrollAmount;
    setPosition(newPosition);
    containerRef.current.scrollLeft = newPosition;
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="mt-10 realtive">
        <h1 className="text-white font-semibold text-xl lg:text-3xl text-start ml-6 lg:ml-12 ">{title}</h1>
        <div className="flex items-center p-6 lg:p-12 md:p-8 relative">
          <div ref={containerRef} className="flex gap-2 overflow-x-hidden scroll-smooth ">
            {/* Render data yang diambil dari API */}
            {data.length > 0 && data.map((film) => <Card key={film.id} image={film.image} name={film.name} series={film.series} />)}
          </div>
          <Left handleClickLeft={() => handleScroll(-ITEM)} variant="absolute"></Left>
          <Right handleClickRight={() => handleScroll(ITEM)} variant="absolute"></Right>
        </div>
      </div>
    </>
  );
};

export default CardLayout;
