import React from "react";
import ReactDOM from "react-dom";

/**
 * Create following pattern
 * <div id="parent" >
 *    <div id="child">
 *       <h1>Hello I am h1 tag </h1>
 *       <h2>Hello I am h2 tag </h2>
 *    </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h1", {}, "I am H2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "head" },
  "hello world from react !"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent)
