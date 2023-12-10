import { Notes } from "./Notes";
import { Slide } from "./Slide";
import { PythonCode } from "./Highlight";

export const Slides = () => (
  <>
    <Slide>
      <h3>What I Wish I Had Known Before Joining an Authentication Startup</h3>
      <h4>A Conceptual Introduction to Cryptography</h4>
    </Slide>
    <Slide>
      <Slide>
        <h3>Outline</h3>
      </Slide>
    </Slide>
    <Slide>
      <PythonCode code={pythonCode} />
    </Slide>
  </>
);

const pythonCode = `\
import pandas as pd
import numpy as np

pd.DataFrame({})`;
