import React from "react";
import dynamic from "next/dynamic";

const MapWrapper = dynamic(() => import("./MapWrapper"), {
  ssr: false,
});
const MapWithNoSSR = () => {
  return (
    <div className="w-full h-full" dir="ltr">
      <MapWrapper />;
    </div>
  );
};

export default MapWithNoSSR;
