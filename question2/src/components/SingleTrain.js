import React from "react";
import { BsTrainFreightFrontFill } from "react-icons/bs";
const SingleTrain = ({ data }) => {
  return (
    <div className="flex flex-col justify-start bg-[#ffffff90] backdrop-blur-sm rounded-xl p-4 aspect-square w-[200px]">
      <div className="flex flex-row justify-center items-center gap-2 font-bold text-xl text-center">
        {data?.trainName}
      </div>
      <div className="flex flex-row items-center gap-2">
        <BsTrainFreightFrontFill />
        {data?.trainNumber}
      </div>
      <div className="flex flex-row items-center gap-2">
        <span>Delayed By</span>
        {data?.delayedBy || 0}
      </div>
    </div>
  );
};

export default SingleTrain;
