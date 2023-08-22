import React, { useEffect, useState } from "react";
import API from "./services/axios";
import { TRAINS_ENDPOINT } from "./constants/endpoints";
import SingleTrain from "./components/SingleTrain";
import { useParams } from "react-router-dom";
const Trains = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const result = (await API.get(TRAINS_ENDPOINT + "/" + id)).data;
      setData(result);
    };
    getData();
  }, []);
  console.log(id);
  console.log(data);
  return (
    <div className="min-w-screen min-h-screen bg-black text-white">
      <div className="text-center text-[2rem] font-bold">Westside Trains</div>
      <div className="flex flex-row flex-wrap gap-3">
        {data && data.trainName ? (
          <div>
            Details for Train {data.trainName}
            <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <div>Train Not Found</div>
        )}
      </div>
    </div>
  );
};

export default Trains;
