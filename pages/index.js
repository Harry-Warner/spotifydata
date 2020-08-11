import React from "react";
import Router from "next/router";

const Home = ({ artists }) => {
  console.log(artists);
  const spotifydata = artists.items;
  return (
    <>
      {spotifydata ? (
        spotifydata.map((item) => <p>{item.name}</p>)
      ) : (
        <button onClick={() => Router.push("/api/login")}>
          Sign in to spotify
        </button>
      )}
    </>
  );
};

Home.getInitialProps = async ({ query }) => {
  const res = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: { Authorization: "Bearer " + query.access_token },
  });
  const json = await res.json();
  return { artists: json };
};

export default Home;
