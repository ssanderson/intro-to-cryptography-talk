import { Highlight, themes } from "prism-react-renderer"

type HighlightProps = {
  code: string;
  language: string;
}

export const BaseHighlight = ({ code, language }: HighlightProps) => (
  <Highlight language={language} code={code} theme={themes.nightOwl}>
    {({ style, tokens, getLineProps, getTokenProps }) => (
      <pre style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export const PythonCode = ({code}: {code: string}) => (
  <BaseHighlight language="python" code={code}/>
)

