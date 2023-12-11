import React from "react";

type SlideProps = {
  transition?: "slide" | "fade" | "none" | "zoom";
  autoAnimate?: boolean;
};

export const Slide = ({
  children,
  transition = "slide",
  autoAnimate = false,
}: React.PropsWithChildren<SlideProps>) => {
  if (autoAnimate) {
    return <section data-auto-animate data-transition={transition}>{children}</section>
  } else {
    return <section data-transition={transition}>{children}</section>
  }
};
