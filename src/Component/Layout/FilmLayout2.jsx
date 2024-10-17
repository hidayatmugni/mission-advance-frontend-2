import { useEffect, useRef, useState } from "react";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import CardFilm2 from "../Fragment/CardFIlm2";
import useApi from "../../stores/useApi"; // Menggunakan custom hook

const FilmLayout2 = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;

  // Memanggil custom hook useApi sebagai fungsi
  const { fetchData, data } = useApi();

  const ITEM = 200;
  const [position, setPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newPosition = position + scrollAmount;
    setPosition(newPosition);
    containerRef.current.scrollLeft = newPosition;
  };

  // Mengambil data dari API ketika komponen di-mount
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
            {data.length > 0 && data.map((film) => <CardFilm2 key={film.id} image={film.image} name={film.name} series={film.series} />)}
          </div>
          <Left handleClickLeft={() => handleScroll(-ITEM)} variant="absolute"></Left>
          <Right handleClickRight={() => handleScroll(ITEM)} variant="absolute"></Right>
        </div>
      </div>
    </>
  );
};

export default FilmLayout2;
