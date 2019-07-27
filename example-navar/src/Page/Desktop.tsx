import * as React from 'react';

import { Icon } from '../components/Icon';
import { INavarFloatProps, Navar, navarManager, scope } from '../lib';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Header: React.FC<INavarFloatProps> = ({ layout, onScroll }) => {
  const [heightRate, setHeightRate] = React.useState(0);

  React.useEffect(() => {
    onScroll(({ scrollTop }: any) => {
      setHeightRate(scope(scrollTop / 200, -1, 1));
    });
  }, [onScroll]);

  return (
    <div
      style={{
        color: '#fff',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        zIndex: layout.zIndex + 1,
        height: layout.topHeight - heightRate * 54,
        paddingTop: layout.topSafe,
        backgroundColor: '#f33',
      }}>
      Header
    </div>
  );
};

const Footer: React.FC<INavarFloatProps> = () => {
  return <div>Header</div>;
};

const Floats = (props: any) => (
  <>
    <Header {...props} />
    <Footer {...props} />
  </>
);
// <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>

const pushSubPage = () => navarManager.push('SubPage');

export const Desktop: React.FC<IProps> = () => {
  return (
    <Navar path="Desktop" layout={{ topHeight: 100 }} renderFloat={Floats} style={{ backgroundColor: '#93ddfd' }}>
      <div className="m-4 max-w-sm max-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="flex-shrink-0">
          <Icon className="h-12 w-12" link="iconxiaoxi1" />
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl text-gray-900 leading-tight">ChitChat</h4>
          <p className="text-base text-gray-600 leading-normal">You have a new message!</p>
          <div className="mt-4">
            <button className="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">
              Message
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex m-4 max-w-sm max-auto flex p-6 bg-white rounded-lg shadow-xl">
        <div className="md:flex-shrink-0">
          <img
            className="rounded-lg md:w-56"
            src="http://img5.imgtn.bdimg.com/it/u=2062341132,2909303877&fm=26&gp=0.jpg"
            alt="Woman paying for a purchase"
          />
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold ">Marketing</div>
            <a className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-600">
              Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
              first customers.
            </p>
            <button className="btn btn-blue">Message2</button>
          </div>
        </div>
      </div>
      <div className="group bg-white hover:bg-blue-500">
        <p className="text-gray-900 group-hover:text-white">New Project</p>
        <p className="text-gray-700 group-hover:text-white">Create a new project</p>
      </div>
    </Navar>
  );
};
