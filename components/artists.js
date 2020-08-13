import React from "react";
import Box from "./box";

const Artists = ({ data }) => {
  const pop = () => {
    return (
      ((data
        .map((item) => item.followers.total)
        .reduce((total, amount) => total + amount) /
        data.length) *
        100) /
      271000000
    ).toFixed(2);
  };

  const genre = () => {
    let newArr = [];
    data.forEach((item) => item.genres.forEach((genre) => newArr.push(genre)));

    let count = [];

    for (let i = 0; i < newArr.length; i += 1) {
      if (count.map((entity) => entity.genre).includes(newArr[i])) {
        count.splice(count.map((item) => item.genre).indexOf(newArr[i]), 1, {
          genre: newArr[i],
          count: count.find((item) => item.genre === newArr[i]).count + 1,
        });
      } else {
        count.push({ genre: newArr[i], count: 1 });
      }
    }
    return count
      .map((item) => {
        return {
          genre: item.genre
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          count: item.count,
        };
      })
      .sort((a, b) => b.count - a.count)
      .map((item) => item.genre);
  };
  return (
    <>
      <h2 className="text-2xl w-11/12 mx-auto mb-2 font-bold uppercase">
        Artists
      </h2>
      <div className="w-11/12 bg-brown mx-auto p-4 shadow-lg flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-between">
        <Box title="Top 5 Artists">
          {data.slice(0, 5).map((item, index) => (
            <li key={item.index}>
              <h2>
                {index + 1}. {item.name}
              </h2>
            </li>
          ))}
        </Box>
        <Box title="Top 5 Genres">
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
        </Box>
      </div>
    </>
  );
};

export default Artists;
