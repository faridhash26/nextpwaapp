import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: any = [51.505, -0.09];

interface MapWrapperProps {
  children?: React.ReactNode;
}
const MapWrapper: FC<MapWrapperProps> = ({ children }): JSX.Element => {
  return (
    <MapContainer
      center={[32.4207423, 53.6830157]}
      zoom={6}
      style={{ height: "100vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
      {children}
    </MapContainer>
  );
};

export default MapWrapper;
