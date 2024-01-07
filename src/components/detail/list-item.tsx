/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { type ReactNode } from 'react';
import type ILinked from 'src/shared/interfaces/linked.interface';

export default class ListItem extends React.Component<
  ILinked & { isEmpty: boolean; key: string },
  unknown,
  unknown
> {
  static defaultProps = {
    isEmpty: false,
  };

  render(): ReactNode {
    const { link, icon, title, value, isEmpty } = this.props;
    const linkValue = link ? link(value ?? '') : '';

    return (
      <a
        ref={linkValue}
        target="_blank"
        rel="noreferrer"
        className="flex justify-start py-2 px-1 items-center"
      >
        <div className="flex-grow font-medium gap-2 flex items-center my-1">
          {icon as JSX.Element} {title}
        </div>
        <div
          className={`${
            isEmpty ? 'flex-grow' : ''
          } text-sm font-normal text-right mr-2 ml-3 ${
            linkValue ? 'truncate' : ''
          }`}
          style={{
            wordBreak: 'break-word',
          }}
        >
          {value}
        </div>
      </a>
    );
  }
}
