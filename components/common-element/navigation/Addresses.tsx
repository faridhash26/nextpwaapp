import React, { FC, useState } from "react";

interface AddressesProps {
  locations: Array<any>;
}
const Addresses: FC<AddressesProps> = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  return (
    <div className="w-full h-full flex items-center justify-center flex-col overflow-y-auto ">
      <div className="w-[90%] grid grid-cols-1 gap-5 mt-28 mb-3 ">
        {locations.map((item: any) => (
          <button
            key={item.id}
            className="grid col-span-1  grid-cols-4 gap-4 w-full  shadow-light-morfism dark:shadow-dark-morfism p-2  transition-colors duration-200 bg-indigo-600 rounded-full hover:text-indigo-600 hover:bg-indigo-100 dark:hover:text-light dark:hover:bg-indigo-700 dark:bg-maindark focus:outline-none focus:bg-indigo-100 dark:focus:bg-indigo-700 focus:ring-indigo-800"
          >
            <div className="col-span-1">
              <span>نام :</span>
              <span>{item.name}</span>
            </div>
            <div className="col-span-1">
              <span>نام :</span>
              <span>{item.description}</span>
            </div>
            <div className="col-span-1">
              <span>مبدا</span>
              <span>{item.addressOriginInfo.address}</span>
            </div>
            <div className="col-span-1">
              <span>مقصد</span>
              <span>{item.addressDestinationInfo.address}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
