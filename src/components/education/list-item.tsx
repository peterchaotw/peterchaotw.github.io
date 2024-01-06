import React from 'react';
import Skeleton from '../skeleton';
import { format, parse } from 'date-fns';
import { defaultColors } from '../../assets/consts';
import { type EducationConfig } from '../../shared/interfaces/config.interface';

export default class ListItem extends React.Component<
  EducationConfig,
  any,
  any
> {
  getTime() {
    try {
      const from = parse(this.props.from, 'yyyy-MM', new Date());
      const to = parse(this.props.to, 'yyyy-MM', new Date());

      return `${format(from, 'yyyy-MM')} - ${format(to, 'yyyy-MM')}`;
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
        <div className="my-0.5 text-xs">{this.getTime()}</div>
        <h3 className="font-semibold">
          {this.props.degree ?? (
            <Skeleton
              {...{
                width: 'w-6/12',
                height: 'h-4',
                className: 'my-1.5',
              }}
            />
          )}
        </h3>
        <div className="mb-4 font-normal">
          {this.props.institution ?? (
            <Skeleton {...{ width: 'w-6/12', height: 'h-3' }} />
          )}
        </div>
      </li>
    );
  }
}
