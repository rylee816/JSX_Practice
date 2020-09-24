import React from "react";
import ReactDom from "react-dom";
import "../public/styles.css";

ReactDom.render(
  <div>
    <h1>Woozle kitten!</h1>
    <ul>
      <li>He's the goodest boy.</li>
      <li>He has chubby paws.</li>
      <li>He yells at me a lot.</li>
      <img style={{ width: 300 }} src="../images/Bizzle.jpg" alt=""></img>
    </ul>
  </div>,
  document.getElementById("root")
);
