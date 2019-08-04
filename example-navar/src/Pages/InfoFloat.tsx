import * as React from 'react';

import { INavarFloatProps } from '../navar';
/* eslint react-hooks/exhaustive-deps: 0 */
export const InfoFloat: React.FC<INavarFloatProps> = ({
  onScroll,
  anime,
  zIndex,
}) => {
  const [moveY, setMoveY] = React.useState(100);
  React.useEffect(() => {
    if (anime.x !== 0 && moveY !== 100) {
      setMoveY(100);
    }
    onScroll(({ scrollTop }: { scrollTop: number }) => {
      if (anime.x === 0 && scrollTop > 100 && moveY > 0) {
        setMoveY(0);
      } else if (anime.x === 0 && scrollTop < 100 && moveY === 0) {
        setMoveY(100);
      }
    });
  }, [moveY, anime]);

  return (
    <div
      inlist={`
      fixed; left; bottom; 
      row; center; w:100vw; 
      transition:all 0.3s ease-out; 
      transform: translateY(${moveY}%); 
      z: ${zIndex + 1}; `}
    >
      <div
        inlist={`m:--2; mb:--5; p:--5; w:80%; bg:--gray-800; color:--gray-200; center; radius:--4; opacity:0.96;`}
      >
        <div>触屏左滑，返回上一页</div>
      </div>
    </div>
  );
};
