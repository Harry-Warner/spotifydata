import querystring from "querystring";

export default (req, res) => {
  let redirect_uri =
    process.env.REDIRECT_URI || "http://localhost:3000/api/callback";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: "user-top-read",
        redirect_uri,
      })
  );
};
