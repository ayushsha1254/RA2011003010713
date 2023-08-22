import React, { useEffect, useState } from "react";
import API from "../services/axios";
import { TRAINS_ENDPOINT } from "../constants/endpoints";
import SingleTrain from "./SingleTrain";
const Trains = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const result = (await API.get(TRAINS_ENDPOINT)).data;
      setData(result);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div className="min-w-screen min-h-screen bg-black text-white">
      <div className="text-center text-[2rem] font-bold">Westside Trains</div>
      <div className="flex flex-row flex-wrap">
        {data &&
          data.length > 0 &&
          data?.map((item, key) => {
            return <SingleTrain key={key} data={item}></SingleTrain>;
          })}
      </div>
    </div>
  );
};

export default Trains;
