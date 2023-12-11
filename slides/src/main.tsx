import ReactDOM from "react-dom/client";

import { Deck } from "./Deck.tsx";
import { Slides } from "./Slides.tsx";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/solarized.css";
import "./index.css";

const App = () => (
  <div className="App">
    <Deck>
      <Slides/>
    </Deck>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
