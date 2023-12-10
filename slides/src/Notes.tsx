import { PropsWithChildren } from "react";

export const Notes = ({children}: PropsWithChildren<{}>) => (
  <aside className="notes">
    {children}
  </aside>
);
