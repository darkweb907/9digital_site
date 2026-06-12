import "./index.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Highlight from "./component/Highlight";
import Explore from "./component/Explore";
import Features from "./component/Features";

const App = () => {
  return (
    <>
      <div className=" ">
        <Header />
        <Hero />
        <Highlight/>
        <Explore/>
        <Features/>
      </div>
    </>
  );
};

export default App;
