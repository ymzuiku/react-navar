import * as React from 'react';

const webWorkerScript = `
  self.addEventListener('message', event => {
    const url = event.data;
    fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
    }).then(response => {
        return response.blob();
    }).then(_ => postMessage(url)).catch(console.error);
  })
`;

interface IImageWorkerProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  containerClass?: string;
  imageClass?: string;
  placeholder?: string | any;
  // src: string;
}

interface IImageWorkerState {
  imgSrc: string;
  isLoading: boolean;
}

const wrappedComponent = (WrappedComponent: any) => (props: any) => {
  return <WrappedComponent {...props} />;
};

export class ImgWorker extends React.Component<
  IImageWorkerProps,
  IImageWorkerState
> {
  public image: HTMLImageElement = undefined as any;

  public state = {
    isLoading: true,
    imgSrc: '',
  };
  public worker = new Worker(
    URL.createObjectURL(
      new Blob([webWorkerScript], { type: 'application/javascript' })
    )
  );
  public constructor(props: IImageWorkerProps) {
    super(props);
    this.worker.onmessage = (event: any) => {
      this.loadImage(event.data);
    };
  }

  public componentDidMount() {
    this.worker.postMessage(this.props.src);
  }

  public componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
    this.worker.terminate();
  }

  public loadImage = (url: string) => {
    const image = new Image();
    image.style.width = '100%';
    image.style.height = '100%';
    this.image = image;

    image.src = url;
    image.decode !== undefined
      ? image
          .decode()
          .then(this.onLoad)
          .catch(this.onLoad)
      : (image.onload = this.onLoad);
  };

  public onLoad = () => {
    this.setState({
      imgSrc: this.image.src,
      isLoading: false,
    });
  };

  public render() {
    const { style, imageClass, containerClass, ...rest } = this.props;

    return (
      <div className={containerClass}>
        {this.state.isLoading ? (
          this.renderPlaceholder()
        ) : (
          <img
            src={this.state.imgSrc}
            style={{ ...style }}
            className={imageClass}
            alt="worker"
            {...rest}
          />
        )}
      </div>
    );
  }

  public renderPlaceholder() {
    const { placeholder, style } = this.props;
    if (typeof placeholder === 'function') {
      const PlaceholderComponent = wrappedComponent(placeholder);

      return <PlaceholderComponent />;
    }
    if (typeof placeholder === 'string') {
      return <img src={placeholder} style={{ ...style }} alt="placeholder" />;
    }

    return null;
  }
}
