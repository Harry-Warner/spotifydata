import React from "react";
import Artists from "./artists";
import Tracks from "./tracks";

const DataPage = ({ data }) => {
  console.log(data.tracks);
  return (
    <>
      <div className="mt-40">
        <Artists data={data.artists.items} />
        <Tracks data={data.tracks.items} />
      </div>
    </>
  );
};

export default DataPage;
