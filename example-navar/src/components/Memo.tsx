import * as React from 'react';

// tslint:disable max-classes-per-file

interface IProps {
  children: any;
  memo?: any[];
}

interface IMemoHiddenProps {
  children: any;
  isShow: boolean;
}

/** 根据 memo 拦截 */
class Memo extends React.Component<IProps> {
  public lastMemo: any[] = this.props.memo ? this.props.memo : [];

  public render() {
    return this.props.children;
  }

  public shouldComponentUpdate = (nextProps: IProps) => {
    const { memo } = nextProps;
    if (!memo) {
      return false;
    }

    let isNeedUpdate = false;

    for (let i = 0; i < this.lastMemo.length; i++) {
      if (this.lastMemo[i] !== memo[i]) {
        isNeedUpdate = true;
        break;
      }
    }

    this.lastMemo = [...memo];

    return isNeedUpdate;
  };
}

/** 控制 display, 如果显示就不拦截更新，否则根据isShow是否改变来判断是否更新 */
class MemoDisplay extends React.Component<IMemoHiddenProps> {
  public lastShow: boolean = this.props.isShow;

  public render() {
    const { children, isShow } = this.props;

    return <div style={{ display: isShow ? undefined : 'none' }}>{children}</div>;
  }

  public shouldComponentUpdate = (nextProps: IMemoHiddenProps) => {
    const { isShow } = nextProps;

    let isNeedUpdate = isShow;

    if (this.lastShow !== isShow) {
      isNeedUpdate = true;
    }

    this.lastShow = isShow;

    return isNeedUpdate;
  };
}

export { Memo, MemoDisplay };
