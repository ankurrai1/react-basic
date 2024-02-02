import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Create following pattern
 * <div id="parent" >
 *    <div id="child">
 *       <h1>Hello I am h1 tag </h1>
 *       <h2>Hello I am h2 tag </h2>
 *    </div>
 * </div>
 */

const title = (
  <h1>hello I am title</h1>
)

const HeadingComponent = () => <h1 className="page-heading" >This is page heading</h1>

const PageComponent = () => {
  return (
    <div id="container">
      <HeadingComponent />
      <div style={{"height": "200px", "background":"yellow"}}>
        <h2>page content comes here</h2>
      </div>
    </div>
  )
}

const parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag as one"),
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
// root.render(parent)
// root.render(title)
root.render(<PageComponent/>)
