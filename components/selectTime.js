import React from "react";

const SelectTime = ({ time, setTime, time_range }) => {
  return (
    <>
      {time.length ? (
        <div
          className={`${
            time === time_range ? "bg-aqua text-black" : "bg-black text-aqua"
          } hover:text-black hover:bg-aqua text-sm text-center md:text-2xl font-medium py-2 px-4 uppercase cursor-pointer`}
          onClick={() => setTime(time_range)}
        >
          {time_range} term <span className="hidden md:inline"> data</span>
        </div>
      ) : (
        <button
          className={`bg-aqua text-black hover:text-aqua hover:bg-black text-3xl font-bold py-4 px-8 w-64 uppercase border-2 border-solid border-black`}
          onClick={() => setTime(time_range)}
        >
          {time_range} term data
        </button>
      )}
    </>
  );
};

export default SelectTime;
