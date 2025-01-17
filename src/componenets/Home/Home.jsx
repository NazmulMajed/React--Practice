import Setup from "../../Setup/Setup";
import BeautifulRooms from "../BeautifulRooms/BeautifulRooms";
import BrowseRange from "../BrowseRange/BrowseRange";
import Navbar from "../Navbar/Navbar";
import OurProduct from "../OurProduct/OurProduct";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BrowseRange></BrowseRange>
      <OurProduct></OurProduct>
      <BeautifulRooms></BeautifulRooms>
      <Setup></Setup>
    </div>
  );
};

export default Home;
