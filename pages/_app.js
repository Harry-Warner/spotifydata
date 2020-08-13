import React from "react";
import App from "next/app";
import "../styled/tailwind.css";
import "typeface-quicksand";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <h1 className="w-full text-center text-4xl font-logo font-bold">
          Spotify Data
        </h1>
        <div className="max-w-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex flex-col min-h-container font-logo bg-aqua">
          <Component {...pageProps} />
        </div>
        <p className="my-2 italic text-center w-full">
          Site by{" "}
          <span className="underline">
            <a href="https://harry-warner.co.uk">Harry Warner</a>
          </span>
        </p>
      </>
    );
  }
}

export default MyApp;
