import React, { createContext, useContext, useEffect } from "react";

const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

interface IAnimateOnIntersect {
  options?: IntersectionObserverInit;
  children?: React.ReactNode;
}

interface IAnimateOnIntersectContext {
  isInView: boolean;
}

export const AnimateOnIntersectContext =
  createContext<IAnimateOnIntersectContext>({
    isInView: false,
  });

const AnimateOnIntersect: React.FC<IAnimateOnIntersect> = ({
  options = defaultOptions,
  children,
}) => {
  const containerRef = React.useRef<HTMLDivElement>();
  const [isInView, setIsInView] = React.useState<boolean>(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return (
    <AnimateOnIntersectContext.Provider value={{ isInView }}>
      <div ref={containerRef}>{children}</div>
    </AnimateOnIntersectContext.Provider>
  );
};

export function useAnimateOnIntersect() {
  return useContext(AnimateOnIntersectContext);
}

export default AnimateOnIntersect;
