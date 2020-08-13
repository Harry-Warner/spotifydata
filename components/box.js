import React from "react";

const Box = ({ title, children }) => {
  return (
    <>
      <div className="p-4 bg-lightBlue w-full min-h-64 shadow-lg space-y-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <ul className="font-light space-y-2">{children}</ul>
      </div>
    </>
  );
};

export default Box;
