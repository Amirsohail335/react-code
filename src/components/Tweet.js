import React from "react";
// import Tweet from "./Tweet";

// function Tweet() {
//   return (
//     <div>Tweet</div>
//   )
// }

const Tweet = (props) => {
  return (
    <div className="Tweet">
      <h2>Name {props.author}</h2>
      <h3>{props.message}</h3>
      <button>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
