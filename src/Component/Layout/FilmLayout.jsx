import CardFilm from "../Fragment/CardFilm";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import { useState, useRef, useEffect } from "react";
import getMovies from "../../Data/DataMovie";

const FilmLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;

  const [movies, setMovies] = useState([]);
  const ITEM = 200;
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
      <div className="mt-10 realtive">
        <h1 className="text-white font-semibold text-xl lg:text-3xl text-start ml-6 lg:ml-12">{title}</h1>
        <div className="flex items-center p-6 lg:p-12 md:p-8 relative">
          <div ref={containerRef} className="flex gap-2 overflow-x-hidden scroll-smooth ">
            {movies.length > 0 && movies.map((movie) => <CardFilm key={movie.id} image={movie.image} name={movie.name} series={movie.series} />)}
          </div>
          <Left handleClickLeft={() => handleScroll(-ITEM)} variant="absolute" />
          <Right handleClickRight={() => handleScroll(ITEM)} variant="absolute" />
        </div>
      </div>
    </>
  );
};

export default FilmLayout;
