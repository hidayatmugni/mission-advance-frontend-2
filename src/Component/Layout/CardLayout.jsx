import Card from "../Fragment/Card";
import Left from "../Element/Scroll/Left";
import Right from "../Element/Scroll/Right";
import { useState, useRef } from "react";
const CardLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  // Melanjutkan nonton Flm
  const Cards = [
    {
      id: 1,
      image: "../assets/type/Type=1.png",
      name: "Drakor",
      rating: 6.5,
      episode: "Episode Baru",
    },
    {
      id: 2,
      image: "../assets/type/Type=2.png",
      name: "Shazam",
      rating: 7.6,
      episode: "Episode Baru",
    },
    {
      id: 3,
      image: "../assets/type/Type=3.png",
      name: "Avatar",
      rating: 7.7,
      episode: "Episode Baru",
    },
    {
      id: 4,
      image: "../assets/type/Type=4.png",
      name: "Fast X",
      rating: 9.8,
      episode: "Episode Baru",
    },
    {
      id: 5,
      image: "../assets/type/Type=5.png",
      name: "blue Lock",
      rating: 7.9,
      episode: "Episode Baru",
    },
    {
      id: 6,
      image: "../assets/type/Type=6.png",
      name: "Litle Mermaid",
      rating: 6.5,
      episode: "Episode Baru",
    },
    {
      id: 7,
      image: "../assets/type/Type=7.png",
      name: "The Tomorrow War",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 8,
      image: "../assets/type/Type=8.png",
      name: "Rio 2016",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 9,
      image: "../assets/type/Type=9.png",
      name: "A Man Called Otto",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 10,
      image: "../assets/type/Type=10.png",
      name: "Big Hero 6",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 11,
      image: "../assets/type/Type=11.png",
      name: "Suzume",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 12,
      image: "../assets/type/Type=12.png",
      name: "Batman ",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 13,
      image: "../assets/type/Type=13.png",
      name: "Stuart Little",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 14,
      image: "../assets/type/Type=14.png",
      name: "Baymax",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 15,
      image: "../assets/type/Type=15.png",
      name: "Drakor",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 16,
      image: "../assets/type/Type=16.png",
      name: "Guardian of the Galaxy",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 17,
      image: "../assets/type/Type=17.png",
      name: "All Of Us Are Dead",
      rating: 8.5,
      episode: "Episode Baru",
    },
    {
      id: 18,
      image: "../assets/type/Type=18.png",
      name: "Alice in Borderland",
      rating: 8.5,
      episode: "Episode Baru",
    },
  ];
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
            {Cards.map((Cards) => (
              <div key={Cards.id}>
                <Card image={Cards.image} name={Cards.name} rating={Cards.rating} episode={Cards.episode} id={Cards.id} />
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
