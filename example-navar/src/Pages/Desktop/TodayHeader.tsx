import dayjs from 'dayjs';
import * as React from 'react';

import { BlodTitle } from '../../components/BlodTitle';
import { Memo } from '../../components/Memo';
import { device, INavarFloatProps, scope } from '../../navar';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  scrollRef: { current: any };
}

const dayStr = dayjs().format('MM月DD日');
const dayWeek = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][dayjs().day()];

const avatarUrl =
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564256910383&di=c0c454368a57d9b7046cd302ec0a9c4d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F12%2F20151212193107_ujGZV.jpeg';

export const TodayHeader: React.FC<INavarFloatProps> = ({ onScroll, anime }) => {
  const [moveY, setMoveY] = React.useState(0);
  React.useEffect(() => {
    onScroll(({ scrollTop }: { scrollTop: number }) => {
      if (scrollTop < 0) {
        setMoveY(-scrollTop / 2);
      } else {
        setMoveY(-scrollTop);
      }
    });
  }, []);

  return (
    <div
      className="flex fixed justify-between items-center flex-row px-4 left-0 top-0 z-50 w-vw pt-top-safe"
      style={{
        pointerEvents: anime.x < 0 ? 'none' : undefined,
        transition: 'transform 0.15s ease-out',
        transform: `translateY(${moveY + 10}px)`,
      }}>
      <div
        style={{
          transition: 'all 0.25s ease-out',
          transform: `translateX(${anime.x * 500}%)`,
        }}>
        <div className="p-0 text-xs opacity-60">
          {dayStr}
          <span className="ml-2">{dayWeek}</span>
        </div>
        <BlodTitle>Today</BlodTitle>
      </div>
      <img className="w-10 rounded-full h-10" src={avatarUrl} style={{ opacity: anime.x >= 0 ? 1 : 0 }} />
    </div>
  );
};
