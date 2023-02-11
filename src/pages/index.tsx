import CanvasContainer from "components/pureElement/three/CanvasContainer";
import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  return (
    <div className="border bg-red p-5 w-full h-full">
      <div>Home</div>
      <CanvasContainer />
    </div>
  );
};

export default Home;
