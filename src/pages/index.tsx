import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const { isDarkMode } = useSelector((state: any) => state.userSettings);

  return <div className="border bg-red p-5">Home</div>;
};

export default Home;
