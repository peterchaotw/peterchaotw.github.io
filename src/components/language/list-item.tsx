/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type ReactNode } from 'react';
import LanguageType from '../../shared/enums/language-type';
import { type LanguageConfig } from '../../shared/interfaces/config.interface';

export default class ListItem extends React.Component<
  LanguageConfig & { isEmpty: boolean },
  any,
  any
> {
  static defaultProps = {
    isEmpty: false,
  };

  render(): ReactNode {
    const { proficiency, name } = this.props;
    const max = Object.keys(LanguageType).filter((value: unknown) =>
      isNaN(value as number),
    ).length;

    return (
      <>
        <div className="flex w-full">
          <div className="flex-grow font-medium gap-2 flex items-center my-1">
            {name}
          </div>
          <div className="grid flex-grow card place-items-right">
            <progress
              className="progress w-40"
              value={proficiency + 1}
              max={max}
            ></progress>
          </div>
        </div>
      </>
    );
  }
}
