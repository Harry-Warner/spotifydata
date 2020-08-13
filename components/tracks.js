import React from "react";
import Box from "./box";

const Tracks = ({ data }) => {
  console.log(data[0].artists);
  return (
    <>
      <h2 className="text-2xl w-11/12 mx-auto mb-2 font-bold uppercase mt-20">
        Tracks
      </h2>
      <div className="w-11/12 bg-brown mx-auto p-4 shadow-lg flex flex-col md:flex-row  justify-between">
        <Box title="Top 5 Tracks">
          {data.slice(0, 5).map((item, index) => (
            <li key={item.index}>
              <h2>
                {index + 1}. {item.name} ({item.artists[0].name})
              </h2>
            </li>
          ))}
        </Box>
        {/* <Box title="Top 5 Genres">
          {genre()
            .slice(0, 5)
            .map((item, index) => (
              <li key={item.index}>
                <h2>
                  {index + 1}. {item}
                </h2>
              </li>
            ))}
        </Box>
        <Box title="Average Popularity">
          <p className="text-3xl font-bold self-center">
            {pop()}% ({pop() > 1 ? "Mainstream" : "Hipster"})
          </p>
        </Box> */}
      </div>
    </>
  );
};

export default Tracks;
