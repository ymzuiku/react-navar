import * as React from 'react';
export const useEvent = () => {
  const onEvent = React.useRef();

  const onHandle = React.useCallback((e: any) => {
    if (onEvent.current) {
      (onEvent.current as any)(e);
    }
  }, []) as any;

  return [onHandle, onEvent];
};
