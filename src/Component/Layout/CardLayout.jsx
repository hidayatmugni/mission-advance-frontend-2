import Card from "../Fragment/Card";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import { useState, useRef, useEffect } from "react";
import getMovies from "../../Data/DataMovie";

const CardLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Melanjutkan nonton Flm
  const [movies, setMovies] = useState([]);

  const ITEM = 360;
  const [position, setPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newPosition = position + scrollAmount;
    setPosition(newPosition);
    containerRef.current.scrollLeft = newPosition;
  };

  useEffect(() => {
    getMovies(setMovies);
    console.log(movies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative px-2 lg:mt-16 mt-10 ">
        <h1 className="text-xl lg:text-3xl mt-6 lg:mb-6 font-bold text-white text-start ml-6 lg:ml-10">{title}</h1>
        <div className="w-[100%]  lg:px-10 mx-auto flex items-center p-4">
          <div ref={containerRef} className="flex gap-5 overflow-x-hidden  scroll-smooth ">
            {movies.length > 0 && movies.map((movie) => <Card key={movie.id} image={movie.image} name={movie.name} series={movie.series} rating={movie.rating} />)}
          </div>
          <Left handleClickLeft={() => handleScroll(-ITEM)} />
          <Right handleClickRight={() => handleScroll(ITEM)} />
        </div>
      </div>
    </>
  );
};

export default CardLayout;
