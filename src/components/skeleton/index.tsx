import React from 'react';
import { defaultColors } from '../../assets/consts';

export interface SkeletonParams {
  width: number | string | undefined;
  height: number | string | undefined;
  style: any | undefined;
  shape: string | undefined;
  className: string | undefined;
}

export default class Skeleton extends React.Component<SkeletonParams> {
  public static defaultProps: Partial<SkeletonParams> = {
    style: {},
    shape: '',
  };

  render(): React.ReactNode {
    const { width, height, style, shape, className } = this.props;

    return (
      <div
        className={`${defaultColors.bg} animate-pulse ${shape}${
          className ? ` ${className}` : ''
        }${width ? ` ${width}` : ''}${height ? ` ${height}` : ''}`}
        style={style}
      />
    );
  }
}
