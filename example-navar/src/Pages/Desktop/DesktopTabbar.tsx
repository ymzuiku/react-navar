import * as React from 'react';

import { Icon } from '../../components/Icon';
import { TabBar } from '../../components/TabBar';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

interface IItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: string;
  title: string;
}

const Item: React.FC<IItemProps> = ({ icon, title }) => {
  return (
    <div className="h-14 flex-col flex items-center justify-center">
      <Icon className="w-6 mt-2 h-6 text-gray-700" link={icon} />
      <p className="text-xxs mt-2 text-gray-700">{title}</p>
    </div>
  );
};

export const DesktopTabbar: React.FC<IProps> = () => {
  return (
    <div className="fixed left-0 bottom-0 z-10 flex flex-row items-center justify-around pb-bottom-safe bg-gray-100 w-vw border-t border-solid border-gray-400">
      <Item icon="icontoday" title="Today" />
      <Item icon="iconhuojian" title="Game" />
      <Item icon="iconios-apps" title="App" />
      <Item icon="icondownload" title="Update" />
      <Item icon="iconsousuo" title="Search" />
    </div>
  );
};
