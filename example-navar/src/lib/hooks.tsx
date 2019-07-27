import * as React from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

export const useAddScroll = () => {
  const { current: scrollObs } = React.useRef({
    listenCache: new Set(),
    listen: (fn: any) => {
      scrollObs.listenCache.add(fn);

      return () => {
        scrollObs.listenCache.delete(fn);
      };
    },
  });

  const handleOnScroll = React.useCallback((event: any) => {
    scrollObs.listenCache.forEach((fn: any) => fn(event.target));
  }, []) as any;

  React.useEffect(() => {
    return () => {
      scrollObs.listenCache.clear();
    };
  }, []);

  return [scrollObs, handleOnScroll];
};
