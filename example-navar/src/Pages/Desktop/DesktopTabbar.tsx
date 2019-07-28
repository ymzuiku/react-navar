import * as React from 'react';

import { Icon } from '../../components/Icon';
import { Memo } from '../../components/Memo';
import { cssin } from '../../cssin';

interface IProps {
  selectedIndex: number;
  onChange(selectedIndex: number): void;
}

interface IItemProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: string;
  isSelected: boolean;
  title: string;
}

const Item: React.FC<IItemProps> = ({ icon, title, onClick, isSelected }) => {
  return (
    <div onClick={onClick} className="h-14 my-1 flex-col flex items-center justify-center">
      <Icon className={`ease-out-3 w-7 h-7 ${isSelected ? 'text-teal-900' : 'text-teal-500'}`} link={icon} />
      <p className={`text-xxs mt-1 ${isSelected ? 'text-teal-900' : 'text-teal-500'}`}>{title}</p>
    </div>
  );
};

export const DesktopTabbar: React.FC<IProps> = ({ onChange, selectedIndex }) => {
  return React.useMemo(() => {
    const makeProp = (n: number) => ({
      onClick: () => {
        onChange(n);
      },
      isSelected: selectedIndex === n,
    });

    const itemsData = [
      { icon: 'icontoday', title: 'Today', ...makeProp(0) },
      { icon: 'iconhuojian', title: 'Game', ...makeProp(1) },
      { icon: 'iconios-apps', title: 'App', ...makeProp(2) },
      { icon: 'icondownload', title: 'Update', ...makeProp(3) },
      { icon: 'iconsousuo', title: 'Search', ...makeProp(4) },
    ];

    return (
      <div
        // className="fixed left-0 bottom-0 z-10 flex flex-row items-center justify-around pb-bottom-safe bg-teal-100 w-vw border-t border-teal-200"
        // className={css(`.desktopTabbar:hover {
        //   background-color: #f00 !important;
        // }`)}
        className={cssin(
          'fixed. left. bottom. z=20 row. items=center justify=around pb=--bottom-safe w=100vw border-t=1px bg3=--teal-100 background-color=--teal-100  border-color=--teal-200',
        )}>
        {itemsData.map((v) => {
          return (
            <Memo key={v.title} memo={[v.isSelected]}>
              <Item {...v} />
            </Memo>
          );
        })}
      </div>
    );
  }, [selectedIndex]);
};
