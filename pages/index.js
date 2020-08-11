import React from "react";
import Router from "next/router";

const Home = ({ spotifydata }) => {
  console.log(spotifydata);
  return (
    <>
      {spotifydata ? (
        <div style={{ display: "flex" }}>
          <ul>
            {spotifydata.short.items.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Popularity: {item.popularity}</p>
              </li>
            ))}
          </ul>
          <ul>
            {spotifydata.medium.items.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Popularity: {item.popularity}</p>
              </li>
            ))}
          </ul>
          <ul>
            {spotifydata.long.items.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Popularity: {item.popularity}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={() => Router.push("/api/login")}>
          Sign in to spotify
        </button>
      )}
    </>
  );
};

Home.getInitialProps = async ({ query }) => {
  const authHeaders = {
    headers: { Authorization: "Bearer " + query.access_token },
  };
  const long = await fetch(
    `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term`,
    authHeaders
  ).then((res) => res.json());
  const medium = await fetch(
    `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term`,
    authHeaders
  ).then((res) => res.json());
  const short = await fetch(
    `https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term`,
    authHeaders
  ).then((res) => res.json());
  return { spotifydata: { long: long, medium: medium, short: short } };
};

export default Home;
