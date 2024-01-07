/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import { type CertificationConfig } from '../../shared/interfaces';
import ListItem from './list-item';
import { connect } from 'react-redux';

class Certification extends React.Component<
  { certifications: CertificationConfig[] },
  unknown,
  unknown
> {
  render(): React.ReactNode {
    return (
      <>
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                <span className="text-base-content opacity-70">
                  Certification
                </span>
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                <Fragment>
                  {this.props.certifications
                    .orderByDescending((config) => config.date)
                    .toArray()
                    .map((certification, index) => (
                      <ListItem key={index} {...certification} />
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
  return { certifications: state.certification };
};
export default connect(mapStateToProps)(Certification);
