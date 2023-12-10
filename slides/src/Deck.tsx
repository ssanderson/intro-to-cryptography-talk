import { useEffect } from "react";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";

export const Deck = ({ children }: React.PropsWithChildren<{}>) => {
  useEffect(() => {
    Reveal.initialize({
      plugins: [RevealNotes, RevealMarkdown]
    });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
      <h6 style={{ position: "fixed", bottom: 0, left: "20px" }}>
        Scott Sanderson
      </h6>
    </div>
  );
};
