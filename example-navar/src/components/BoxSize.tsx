import * as React from 'react';

let cacheID = 0;

function createID() {
  cacheID++;

  return `__cache_with_size_id__${cacheID}`;
}

interface IProps {
  defaultStyle?: React.CSSProperties;
  resizetimeOut?: number;
  children(box: IBox): any;
  onLoad?(box: IBox | undefined): void;
}

interface IBox {
  height: number;
  width: number;
  x: number;
  y: number;
}

interface IState {
  box: IBox | undefined;
}

export class BoxSize extends React.Component<IProps> {
  public static defaultProps = {
    defaultStyle: { minHeight: 500, minWidth: 10 },
    resizetimeOut: 100,
  };

  public state: IState = {
    box: undefined,
  };

  private readonly id: string;

  private updateBoxSizeTimer: any;

  public constructor(props: IProps) {
    super(props);
    this.id = createID();
  }

  public componentDidMount() {
    this.getBox();
    window.addEventListener('resize', this.updateBoxSize);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateBoxSize);
  }

  public render() {
    const { box } = this.state;
    const { children, defaultStyle } = this.props;

    if (!box) {
      return <div id={this.id} style={{ flex: 1, width: '100%', height: '100%', ...defaultStyle }} />;
    }

    return (
      <div id={this.id} style={{ width: '100%', height: '100%' }}>
        {children(box)}
      </div>
    );
  }

  public updateBoxSize = () => {
    if (this.updateBoxSizeTimer) {
      clearTimeout(this.updateBoxSizeTimer);
    }
    this.updateBoxSizeTimer = setTimeout(() => {
      this.getBox();
      this.updateBoxSizeTimer = void 0;
    }, this.props.resizetimeOut);
  };

  private readonly getBox = () => {
    this.setState({ box: void 0 }, () => {
      setTimeout(() => {
        const box = document.getElementById(this.id);

        if (box) {
          this.setState(
            {
              box: {
                height: box.offsetHeight,
                width: box.offsetWidth,
                x: box.offsetLeft,
                y: box.offsetTop,
              },
            },
            () => {
              if (this.props.onLoad) {
                this.props.onLoad(this.state.box);
              }
            },
          );
        }
      });
    });
  };
}
