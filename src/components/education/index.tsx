/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { type EducationConfig } from '../../shared/interfaces';
import React, { Fragment, type ReactNode } from 'react';
import ListItem from './list-item';
import { connect } from 'react-redux';

class Education extends React.Component<
  { education: EducationConfig[] },
  unknown,
  unknown
> {
  render(): ReactNode {
    return (
      <>
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                <span className="text-base-content opacity-70">Education</span>
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                <Fragment>
                  {this.props.education
                    .orderByDescending((config) => config.from)
                    .toArray()
                    .map((item, index) => (
                      <ListItem key={index} {...item} />
                    ))}
                </Fragment>
              </ol>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: any) => {
  return { education: state.education };
};
export default connect(mapStateToProps)(Education);
