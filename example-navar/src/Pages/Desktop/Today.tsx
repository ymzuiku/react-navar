import * as React from 'react';

import { AppStoreCard } from '../../components/AppStoreCard';
import { changeStatusBarDart } from '../../utils/changeStatusBar';

import { todayData } from './todayData';

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Today: React.FC<IProps> = () => {
  const [testOne, setTestOne] = React.useState({ ...todayData[2] });
  const handleOnScroll = React.useCallback((e: any) => {
    if (e.target.scrollTop > 160) {
      changeStatusBarDart(false);
    } else {
      changeStatusBarDart(true);
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setTestOne({ ...todayData[1] });
    }, 5000);
  }, []);

  return (
    <div onScroll={handleOnScroll} inlist="overflow:auto; w:100%; h:100vh;">
      <div inlist="h:--23;" />
      <AppStoreCard {...testOne} />
      {todayData.map((v, i) => {
        return <AppStoreCard key={i} {...v} />;
      })}
      <div inlist="h:8rem;" />
    </div>
  );
};
