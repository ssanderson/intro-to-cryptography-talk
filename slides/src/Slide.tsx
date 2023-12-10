import React from "react";

type SlideProps = {
  transition?: "slide" | "fade" | "none" | "zoom";
};

export const Slide = ({
  children,
  transition = "slide"
}: React.PropsWithChildren<SlideProps>) => (
  <section data-transition={transition}>{children}</section>
);
