import React, { ReactElement } from "react";
import AdminLayout from "components/layout/adminpanel/AdminLayout";
import MapWithNoSSR from "components/pureElement/map/MapWithNoSSR";
import Addresses from "components/common-element/navigation/Addresses";

const Navigation = () => {
  return (
    <div className="w-full h-full  flex flex-col">
      <MapWithNoSSR />
      <div className="w-full  bg-white dark:bg-darker h-[30%]  bg-red  flex">
        <Addresses locations={Locations} />
      </div>
    </div>
  );
};

export default Navigation;

Navigation.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};

const Locations = [
  {
    id: "pfgjdfbdfb1",
    name: "کاشان",
    description: "این یک تست است",
    addressOriginInfo: {
      address: "تهران- کوی بیمه بیمه ۲  ",
      locationPoint: [35.815983141678394, 51.15291522122191],
    },
    addressDestinationInfo: {
      address: "تهران-    محله برج میلاد  ",
      locationPoint: [35.74547428258059, 51.376122807951916],
    },
  },
  {
    id: "pfgjdfbdfb2",
    name: "اصفحان",
    description: "این یک تست است",
    addressOriginInfo: {
      address: "تهران- کوی بیمه بیمه ۲  ",
      locationPoint: [35.815983141678394, 51.15291522122191],
    },
    addressDestinationInfo: {
      address: "تهران-    محله برج میلاد  ",
      locationPoint: [35.74547428258059, 51.376122807951916],
    },
  },
  {
    id: "pfgjdfbdfb3",
    name: "تهران",
    description: "این یک تست است",
    addressOriginInfo: {
      address: "تهران- کوی بیمه بیمه ۲  ",
      locationPoint: [35.815983141678394, 51.15291522122191],
    },
    addressDestinationInfo: {
      address: "تهران-    محله برج میلاد  ",
      locationPoint: [35.74547428258059, 51.376122807951916],
    },
  },
  {
    id: "pfgjdfbdfb4",
    name: "تهران",
    description: "این یک تست است",
    addressOriginInfo: {
      address: "تهران- کوی بیمه بیمه ۲  ",
      locationPoint: [35.815983141678394, 51.15291522122191],
    },
    addressDestinationInfo: {
      address: "تهران-    محله برج میلاد  ",
      locationPoint: [35.74547428258059, 51.376122807951916],
    },
  },
  {
    id: "pfgjdfbdfb5",
    name: "تهران",
    description: "این یک تست است",
    addressOriginInfo: {
      address: "تهران- کوی بیمه بیمه ۲  ",
      locationPoint: [35.815983141678394, 51.15291522122191],
    },
    addressDestinationInfo: {
      address: "تهران-    محله برج میلاد  ",
      locationPoint: [35.74547428258059, 51.376122807951916],
    },
  },
  {
    id: "pfgjdfbdfb6",
    name: "تهران",
    description: "این یک تست است",
    addressOriginInfo: {
      address: "تهران- کوی بیمه بیمه ۲  ",
      locationPoint: [35.815983141678394, 51.15291522122191],
    },
    addressDestinationInfo: {
      address: "تهران-    محله برج میلاد  ",
      locationPoint: [35.74547428258059, 51.376122807951916],
    },
  },
];
