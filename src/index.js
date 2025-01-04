import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" MaxRating={10} onSetRating={setMovieRating} />
      <p>This movies was rated {movieRating} stars</p>
    </div>
  );
} */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      MaxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating color="red" size={24} defaultRating={2} />
    <Test /> */}
  </React.StrictMode>
);
