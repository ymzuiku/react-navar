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
    <div onClick={onClick} className={cssin`h=--14 my=--1 col! items=center justify=center`}>
      <Icon
        className={cssin('ease-out=all_0.3s w=--7 h=--7', isSelected ? 'color=--teal-900' : 'color=--teal-500')}
        link={icon}
      />
      <p className={cssin`font=--font-xxs mt=--1 ${isSelected ? 'color=--teal-900' : 'color=--teal-500'}`}>{title}</p>
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
        className={cssin(
          'fixed! left! bottom! row! z=20 items=center justify=around pb=--bottom-safe w=100vw border-t=1px bg3=--teal-100 background-color=--teal-100  border-color=--teal-200',
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
