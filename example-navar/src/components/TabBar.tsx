import { classn } from '@nuage/classname';
import { Icon } from '@nuage/icon';
import * as React from 'react';

import './TabBar.css';

export interface ITabBarProps {
  data: ITabBarItemProps[];
  selectedId: string;
  style: React.CSSProperties;
  onChange?(selectedId: string): void;
}

export interface ITabBarItemProps {
  icon: string;
  title: string;
  url: string;
}

export const TabBar: React.FC<ITabBarProps> = ({ style, onChange, selectedId, data }) => {
  return (
    <div className="tabbar" style={style}>
      {data.map(({ icon, url, title }) => (
        <button className="tabbar-item" onClick={() => onChange && onChange(url)} key={url}>
          <Icon
            className={classn({
              'tabbar-icon': 1,
              'tabbar-icon-selected': selectedId === url,
            })}
            font={icon}
          />
          <div
            className={classn({
              'tabbar-title': 1,
              'tabbar-title-selected': selectedId === url,
            })}>
            {title}
          </div>
        </button>
      ))}
    </div>
  );
};
