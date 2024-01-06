import React from 'react';
import { parse } from 'date-fns';
import Skeleton from '../skeleton';
import { type CertificationConfig } from '../../shared/interfaces/config.interface';
import { defaultColors } from '../../assets/consts';

export default class ListItem extends React.Component<
  CertificationConfig,
  any,
  any
> {
  getYear() {
    try {
      const date = parse(this.props.date, 'yyyy-MM', new Date());

      return date.getFullYear();
    } catch (error) {
      return (
        <Skeleton
          {...{
            width: 'w-5/12',
            height: 'h-4',
          }}
        />
      );
    }
  }

  render(): React.ReactNode {
    return (
      <li className="mb-5 ml-4">
        <div
          className={`absolute w-2 h-2 ${defaultColors.bg} rounded-full border border-base-300 mt-1.5`}
          style={{ left: '-4.5px' }}
        ></div>
        <div className="my-0.5 text-xs">{this.getYear()}</div>
        <div className="font-semibold">
          <a href={this.props.link} target="_blank" rel="noreferrer">
            {this.props.name ?? (
              <Skeleton
                {...{
                  width: 'w-6/12',
                  height: 'h-4',
                  className: 'my-1.5',
                }}
              />
            )}
          </a>
        </div>
        <h3 className="mb-4 font-normal">
          {this.props.description ?? (
            <Skeleton {...{ width: 'w-6/12', height: 'h-3' }} />
          )}
        </h3>
      </li>
    );
  }
}
