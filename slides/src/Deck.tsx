import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import {Options} from './revealOptions';

export const Deck = ({ children }: React.PropsWithChildren<{}>) => {
  const ref = useRef<Reveal.Api>();
  useEffect(() => {
    (async () => {
      if (ref.current === undefined){
        const api = await Reveal.initialize({
          plugins: [RevealNotes, RevealMarkdown],
          ...Options
        });
        ref.current = api;
      } else {
        Reveal.sync();
      }
    })();
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
