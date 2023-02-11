import React, { ReactElement } from "react";
import AdminLayout from "components/layout/adminpanel/AdminLayout";
import MapWithNoSSR from "components/pureElement/map/MapWithNoSSR";

const Navigation = () => {
  return (
    <div className="w-full h-full">
      <MapWithNoSSR />
    </div>
  );
};

export default Navigation;
Navigation.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
