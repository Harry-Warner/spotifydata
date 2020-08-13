import React, { useState } from "react";
import Router from "next/router";
import SelectTime from "../components/selectTime";
import DataPage from "../components/dataPage";

const Home = ({ spotifydata }) => {
  const [time, setTime] = useState("");
  console.log(time.length);
  console.log(spotifydata);

  if (!spotifydata.long.artists.items) {
    return (
      <div className="flex h-screen items-center justify-center">
        <button
          className="bg-aqua hover:text-aqua hover:bg-black text-black text-3xl font-bold py-2 px-4 self-center uppercase border-2 border-solid border-black"
          onClick={() => Router.push("/api/login")}
        >
          Sign in to spotify
        </button>
      </div>
    );
  }

  if (!time.length) {
    return (
      <div className="flex flex-col h-screen space-y-4 justify-center items-center">
        <SelectTime time_range="short" setTime={setTime} time={time} />
        <SelectTime time_range="medium" setTime={setTime} time={time} />
        <SelectTime time_range="long" setTime={setTime} time={time} />
      </div>
    );
  }

  return (
    <>
      <nav className="absolute left-0 w-screen p-4 pb-0 space-x-4 justify-center align-center flex bg-white">
        <SelectTime time_range="short" setTime={setTime} time={time} />
        <SelectTime time_range="medium" setTime={setTime} time={time} />
        <SelectTime time_range="long" setTime={setTime} time={time} />
      </nav>
      {time === "short" ? (
        <DataPage data={spotifydata.short} />
      ) : time === "medium" ? (
        <DataPage data={spotifydata.medium} />
      ) : (
        <DataPage data={spotifydata.long} />
      )}
    </>
  );
};

const get = async (type, limit, time, authHeaders) => {
  return await fetch(
    `https://api.spotify.com/v1/me/top/${type}?limit=${limit}&time_range=${time}`,
    authHeaders
  ).then((res) => res.json());
};

Home.getInitialProps = async ({ query }) => {
  const authHeaders = {
    headers: { Authorization: "Bearer " + query.access_token },
  };
  const shortA = await get("artists", 50, "short_term", authHeaders);
  const mediumA = await get("artists", 50, "medium_term", authHeaders);
  const longA = await get("artists", 50, "long_term", authHeaders);
  const shortT = await get("tracks", 50, "short_term", authHeaders);
  const mediumT = await get("tracks", 50, "medium_term", authHeaders);
  const longT = await get("tracks", 50, "long_term", authHeaders);
  return {
    spotifydata: {
      short: { artists: shortA, tracks: shortT },
      medium: { artists: mediumA, tracks: mediumT },
      long: { artists: longA, tracks: longT },
    },
  };
};

export default Home;
