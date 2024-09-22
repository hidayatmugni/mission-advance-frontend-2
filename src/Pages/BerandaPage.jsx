import Footer from "../Component/Element/Footer/Footer";
import Navbar from "../Component/Element/Navbar/Navbar";
import Hero from "../Component/Element/Section/Hero/Hero";
import CardLayout from "../Component/Layout/CardLayout";
import FilmLayout from "../Component/Layout/FilmLayout";
import FilmLayout1 from "../Component/Layout/Filmlayout1";
import FilmLayout2 from "../Component/Layout/FilmLayout2";

const BerandaPage = () => {
  return (
    <>
      <div className="bg-slate-900 overflow-x-hidden">
        <Navbar></Navbar>
        <Hero></Hero>
        <CardLayout title="Melanjutkan Tonton Film"></CardLayout>
        <FilmLayout title="Top Rating Film dan Series Hari Ini" />
        <FilmLayout1 title="Film Trending"></FilmLayout1>
        <FilmLayout2 title="Rilis Baru"></FilmLayout2>
        <Footer></Footer>
      </div>
    </>
  );
};

export default BerandaPage;
