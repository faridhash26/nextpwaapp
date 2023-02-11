import React, { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { UserSettingModel } from "redux/reducers/userSettings/userSetting.model";

const position: any = [51.505, -0.09];
interface UseSelectorInterface {
  userSettings: UserSettingModel;
}
interface MapWrapperProps {
  children?: React.ReactNode;
}
const MapWrapper: FC<MapWrapperProps> = ({ children }): JSX.Element => {
  const { isDarkMode } = useSelector(
    (state: UseSelectorInterface) => state.userSettings
  );
  return (
    <MapContainer
      center={[32.4207423, 53.6830157]}
      zoom={6}
      style={{ height: "100vh" }}
    >
      {isDarkMode ? (
        <TileLayer url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png" />
      ) : (
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
      )}

      {/* <TileLayer url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png' /> */}
      {children}
    </MapContainer>
  );
};

export default MapWrapper;
