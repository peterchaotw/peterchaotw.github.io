/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { type WorkExperienceConfig } from '../../shared/interfaces';
import ProjectItem from './project-item';
import { CgArrowUpO } from 'react-icons/cg';
import { format, parse } from 'date-fns';

class WorkProject extends React.Component<
  { workexperience: WorkExperienceConfig[] },
  unknown,
  unknown
> {
  render(): React.ReactNode {
    return (
      <Fragment>
        <div className="col-span-1 lg:col-span-2 bg-base-100 card compact">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div className="shadow bg-opacity-40">
                <div className="card-body">
                  <div className="mx-3 flex items-center justify-between mb-2">
                    <h5 className="card-title">
                      <span className="text-base-content opacity-70">
                        Work Experiences
                      </span>
                    </h5>
                  </div>
                  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                      <div className="timeline-middle">
                        <span className="loading loading-ring loading-xs"></span>
                      </div>
                      <div className="timeline-start md:text-end mb-2">
                        <time className="font-mono italic">now</time>
                      </div>
                      <hr />
                    </li>
                    {this.props.workexperience
                      .orderByDescending((config) => config.startTime)
                      .toArray()
                      .map((w, idx) => {
                        const start = format(
                          parse(w.startTime, 'yyyy-MM', new Date()),
                          'yyyy-MM',
                        );
                        const end = w.endTime
                          ? format(
                              parse(w.endTime, 'yyyy-MM', new Date()),
                              'yyyy-MM',
                            )
                          : undefined;

                        return (
                          <li key={idx}>
                            <hr />
                            <div className="timeline-middle">
                              <CgArrowUpO />
                            </div>
                            <div
                              className={`${
                                idx % 2 === 0
                                  ? 'timeline-start md:text-end '
                                  : 'timeline-end md:text-start'
                              } mb-10 w-full`}
                            >
                              <time className="font-mono italic">
                                {start}
                                {end ? ` - ${end}` : ''}
                              </time>
                              <ProjectItem {...w} />
                            </div>
                            <hr />
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { workexperience: state.workexperience };
};

export default connect(mapStateToProps)(WorkProject);
