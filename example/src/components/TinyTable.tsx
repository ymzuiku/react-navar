import * as React from 'react';

import { BoxSize } from './BoxSize';
import './Table.css';

interface ITableProps {
  /** 每行的css */
  cellClassName?: string;
  /** 表格body的css */
  className?: string;
  /** 用于计算和陈列表格的对象 */
  columns: IColumns[];
  /** 表格统一的宽度，默认150 */
  columnWidth?: number;
  /** 用于裁剪数据 */
  currentPage?: number;
  /** 表格用于渲染的数据 */
  dataSource: any[];
  /** 表格顶部div的css */
  headerClassName: string;
  /** 表格顶部每一个item的css */
  headerItemClassName: string;
  itemClassName: string;
  /** 表格是否处于loading状态, 暂时无功能 */
  loading?: boolean;
  /** 用于裁剪数据 */
  pageSize?: number;
  /** 重新加载columns */
  reloadColumns?: boolean;
  /** 表格内部是否可以滚动 */
  scroll?: boolean;
  /** column的筛选函数 */
  filter?(obj: any): any;
}

interface IColumnRender {
  column?: IColumnRender;
  data?: { [key: string]: any };
  index?: number;
  value?: string;
}

interface IRightFixedColumn {
  index: number;
  width?: number;
}

interface IColumns {
  /** data的编号 */
  dataIndex: string;
  /** 是否吸附 */
  fixed?: boolean | 'left' | 'right';
  /** fiexd至左边距离的总和，不需要设定，会自动计算，需要fiexd的对象都需要设定width */
  fixedLeft?: number;
  /** fiexd至右边距离的总和，不需要设定，会自动计算，需要fiexd的对象都需要设定width */
  fixedRight?: number;
  /** 用于和datasource校验key */
  key: string;

  render?: React.FC<IColumnRender>;
  /** 头部标题 */
  title?: string;
  /** 宽度，可选，fiexd对象必须设定 */
  width?: number;
}

export class Table extends React.Component<ITableProps> {
  public static defaultProps = {
    cellClassName: '',
    className: '',
    columnWidth: 150,
    columns: [],
    dataSource: [],
    headerClassName: '',
    headerItemClassName: '',
    itemClassName: '',
    loading: false,
  };

  private bodyWidth = 0;
  private columns: IColumns[] = [];
  private realWidth = 0;

  public constructor(props: ITableProps) {
    super(props);
    this.state = {
      isShowScrollBar: true,
    };

    this.fixWidths(0, this.props);
  }

  public componentWillReceiveProps = (nextProps: ITableProps) => {
    if (nextProps.reloadColumns && nextProps.columns !== this.props.columns) {
      this.fixWidths(0, nextProps);
    }
  };
  public fixWidths = (w: number, props: ITableProps) => {
    this.columns = typeof this.props.filter !== 'undefined' ? this.props.filter(props.columns) : this.props.columns;
    this.realWidth = 0;
    this.bodyWidth = w;

    let leftFixedWidth = 0;

    let rightFixedWidth = 0;

    const rightFixedColumns: IRightFixedColumn[] = [];

    this.columns.forEach(({ width, fixed }, i) => {
      if (fixed === true || fixed === 'left') {
        this.columns[i].fixedLeft = leftFixedWidth;
        leftFixedWidth += width || (props.columnWidth as number);
      } else if (fixed === 'right') {
        rightFixedColumns.splice(0, 0, { width, index: i });
      }
      if (typeof width !== 'undefined') {
        this.realWidth += width;
      } else {
        this.realWidth += props.columnWidth as number;
      }
    });

    rightFixedColumns.forEach(({ width, index }) => {
      this.columns[index].fixedRight = rightFixedWidth;
      rightFixedWidth += width as number;
    });

    this.realWidth = this.realWidth < this.bodyWidth ? this.bodyWidth : this.realWidth;
  };

  public getPageData = () => {
    const { dataSource, currentPage, pageSize } = this.props;
    if (typeof currentPage === 'undefined' || typeof pageSize === 'undefined') {
      return dataSource;
    }

    return [...dataSource].splice((currentPage - 1) * pageSize, pageSize);
  };

  public render() {
    const { className, scroll } = this.props;

    return (
      <BoxSize>
        {(box) => {
          if (this.bodyWidth !== box.width) {
            this.fixWidths(box.width, this.props);
          }

          return (
            <div
              className={`tiny-table-theme tiny-table-body ${scroll && 'tiny-table-scroll'} ${className}`}
              style={{ width: box.width }}>
              <this.renderHeader />
              {this.getPageData().map((data, i) => {
                // eslint-disable-next-line
                return <this.renderCell key={`table_${i}`} index={i} data={data} />;
              })}
            </div>
          );
        }}
      </BoxSize>
    );
  }

  public renderCell = ({ index, data }: { data: { [key: string]: any }; index: number }) => {
    const { cellClassName, itemClassName } = this.props;

    return (
      <div className={`tiny-table-cell ${cellClassName}`} style={{ width: this.realWidth }}>
        {this.columns.map(
          ({ title, dataIndex, key, fixed, fixedLeft, fixedRight, render, width = this.props.columnWidth }) => {
            let child = data[dataIndex];

            if (typeof render === 'function') {
              child = render({
                data,
                index,
                value: data[dataIndex],
              });
            }

            return (
              <div
                className={`tiny-table-item ${itemClassName}`}
                key={key}
                style={{
                  left: (fixed && fixed !== 'right' && fixedLeft) as any,
                  minWidth: width,
                  position: (fixed && 'sticky') as any,
                  right: (fixed === 'right' && fixedRight) as any,
                  width,
                }}>
                {child}
              </div>
            );
          },
        )}
      </div>
    );
  };

  public renderHeader = () => {
    const { headerClassName, headerItemClassName } = this.props;

    return (
      <div className={`tiny-table-header ${headerClassName}`} style={{ width: this.realWidth }}>
        {this.columns.map(({ title, dataIndex, key, fixed, fixedLeft, fixedRight, render, width }, index) => {
          let child = title;

          if (typeof render === 'function') {
            child = render({
              index,
              value: title,
            }) as any;
          }

          return (
            <div
              className={`tiny-table-header-item ${headerItemClassName}`}
              key={key}
              style={{
                left: (fixed && fixed !== 'right' && fixedLeft) as any,
                minWidth: width,
                position: (fixed && 'sticky') as any,
                right: (fixed === 'right' && fixedRight) as any,
                width,
              }}>
              {child}
            </div>
          );
        })}
      </div>
    );
  };
}
