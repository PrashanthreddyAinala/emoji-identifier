import React, { useState } from "react";
import "./styles.css";

var dictionary = {
  "🏔️": "Snow-Capped Mountain",
  "⛰️": " Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏕️": "Camping",
  "🏖️": "Beach with Umbrella",
  "🏜️": "Desert",
  "🏝️": "Desert Island",
  "🏞️": "National Park",
  "🏟️": "Stadium",
  "🏛️": "Classical Building",
  "🏗️": "Building Construction"
};

var emoji = Object.keys(dictionary);

export default function App() {
  var [place, setPlace] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;
    var place = dictionary[userInput];

    setPlace(place);
  }

  function clickHandler(emoji) {
    var place = dictionary[emoji];

    setPlace(place);
  }

  return (
    <div className="App">
      <h1>Emoji identifier for Places</h1>
      <input onChange={changeHandler} />
      <h3>{place}</h3>
      <p>Here are some of the places we know</p>
      {emoji.map((place) => (
        <span
          style={{
            padding: "1rem",
            fontSize: "2rem",
            cursor: "pointer"
          }}
          onClick={() => clickHandler(place)}
          key={place}
        >
          {place}
        </span>
      ))}
    </div>
  );
}
