import React from "react";
import { BsTrainFreightFrontFill } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
const SingleTrain = ({ data }) => {
  return (
    <div className="flex flex-col justify-start bg-[#ffffff90] backdrop-blur-sm rounded-xl p-4 aspect-square w-[250px]">
      <div className="flex flex-row justify-center items-center gap-2 font-bold text-xl text-center">
        {data?.trainName}
      </div>
      <div className="flex flex-row items-center gap-2">
        <BsTrainFreightFrontFill />
        {data?.trainNumber}
      </div>
      <div className="flex flex-row items-center gap-2">
        <BiSolidTimeFive />
        {data?.departureTime?.Hours || 0}:{data?.departureTime?.Minutes || 0}:
        {data?.departureTime?.Seconds || 0}
      </div>
      <div className="flex flex-row items-center gap-2">
        <span>Delayed By</span>
        <span className="text-red-500">{data?.delayedBy || 0}</span>
        hrs
      </div>
      <div className="flex flex-col items-center gap-2">
        Seats
        <div className="flex flex-row gap-3">
          <div className="flex flex-col justify-center items-center border-2 rounded-xl p-2">
            <span>AC</span>
            <span
              className=""
              style={{
                color: data.seatsAvailable.AC > 0 ? "green" : "red",
              }}
            >
              {data.seatsAvailable.AC}
            </span>
            INR {data.price.AC}
          </div>
          <div className="flex flex-col justify-center items-center border-2 rounded-xl p-2">
            <span>Sleeper</span>
            <span className="text-red-500">{data.seatsAvailable.sleeper}</span>
            INR {data.price.sleeper}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTrain;
