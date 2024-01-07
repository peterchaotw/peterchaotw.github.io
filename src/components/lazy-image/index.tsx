/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type restParameterType } from '../../shared/interfaces/common';
import React, { Fragment } from 'react';

export interface lazyImageProps {
  src: string;
  alt: string;
  placeholder: React.ReactNode;
  rest?: restParameterType;
}

class LazyImage extends React.Component<
  lazyImageProps,
  {
    loading: boolean;
  },
  any
> {
  constructor(props: lazyImageProps) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount(): void {
    const imageToLoad = new Image();
    imageToLoad.src = this.props.src;

    imageToLoad.onload = () => {
      this.setState({ loading: false });
    };
  }

  render(): React.ReactNode {
    return (
      <Fragment>
        {this.state.loading ? (
          this.props.placeholder
        ) : (
          <img src={this.props.src} alt={this.props.alt} {...this.props.rest} />
        )}
      </Fragment>
    );
  }
}

export default LazyImage;
