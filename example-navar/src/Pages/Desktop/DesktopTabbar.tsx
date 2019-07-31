import * as React from "react";

import { Icon } from "../../components/Icon";
import { Memo } from "../../components/Memo";
/* eslint react-hooks/exhaustive-deps: 0 */
interface IProps {
  selectedIndex: number;
  onChange(selectedIndex: number): void;
}

interface IItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon: string;
  isSelected: boolean;
  title: string;
}

const Item: React.FC<IItemProps> = ({ icon, title, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      inlist="h:--14; my:--1; col; items:center; justify:center;"
    >
      <Icon
        inlist={`ease-out:0.3s; w:--7; h:--7; ${
          isSelected ? "color:--teal-900;" : "color:--teal-500;"
        }`}
        link={icon}
      />
      <p
        inlist={`font:--font-xxs; mt:--1; ${
          isSelected ? "color:--teal-900;" : "color:--teal-500;"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export const DesktopTabbar: React.FC<IProps> = ({
  onChange,
  selectedIndex
}) => {
  return React.useMemo(() => {
    const makeProp = (n: number) => ({
      onClick: () => {
        onChange(n);
      },
      isSelected: selectedIndex === n
    });

    const itemsData = [
      { icon: "icontoday", title: "Today", ...makeProp(0) },
      { icon: "iconhuojian", title: "Game", ...makeProp(1) },
      { icon: "iconios-apps", title: "App", ...makeProp(2) },
      { icon: "icondownload", title: "Update", ...makeProp(3) },
      { icon: "iconsousuo", title: "Search", ...makeProp(4) }
    ];

    return (
      <div
        inlist={`fixed; left; bottom; row; z:20; items:center; justify:around; pb:--bottom-safe; w:100vw; bt:--line; bc:--teal-200; pt:--2; background-color:--teal-100;`}
      >
        {itemsData.map(v => {
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
