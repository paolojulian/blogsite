import classNames from 'classnames';
import React, { createContext, useContext, useEffect } from 'react';

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px 100px 0px',
  threshold: 1.0,
};

type AnimateOnIntersectTypes = 'fadeFromDown' | 'fadeFromRight';

const optionsPerType: Record<
  AnimateOnIntersectTypes,
  IntersectionObserverInit
> = {
  fadeFromDown: {
    root: null,
    rootMargin: '0px 0px 100px 0px',
    threshold: 1.0,
  },
  fadeFromRight: {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
  },
};

const initialPositionPerType: Record<
  AnimateOnIntersectTypes,
  { from: string; to: string }
> = {
  fadeFromDown: {
    from: 'transition opacity-0 translate-y-24',
    to: 'opacity-1 translate-y-0',
  },
  fadeFromRight: {
    from: 'transition opacity-0 -translate-x-24',
    to: 'opacity-1 translate-x-0',
  },
};

interface IAnimateOnIntersect {
  type?: AnimateOnIntersectTypes;
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
  type = 'fadeFromDown',
  children,
}) => {
  const containerRef = React.useRef<HTMLDivElement>();
  const [isInView, setIsInView] = React.useState<boolean>(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      callbackFunction,
      optionsPerType[type]
    );
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [type]);

  return (
    <AnimateOnIntersectContext.Provider value={{ isInView }}>
      <div
        ref={containerRef}
        className={classNames(
          'transition duration-1000',
          isInView
            ? initialPositionPerType[type].to
            : initialPositionPerType[type].from
        )}
      >
        {children}
      </div>
    </AnimateOnIntersectContext.Provider>
  );
};

export function useAnimateOnIntersect() {
  return useContext(AnimateOnIntersectContext);
}

export default AnimateOnIntersect;
