/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ReactNode } from 'react';
import { connect } from 'react-redux';
import { type SkillConfig } from '../../shared/interfaces';
import React from 'react';
import SkillType from '../../shared/enums/skill-type';

class Skill extends React.Component<{ skills: SkillConfig[] }, any, any> {
  render(): ReactNode {
    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-base-content opacity-70">Tech Stack</span>
            </h5>
          </div>
          <div className="p-3 flow-root">
            <div className="-m-1 flex flex-wrap justify-center">
              <table className="table table-xs table-pin-rows table-pin-cols">
                {Object.values(SkillType).map((s) => {
                  const skillset = this.props.skills
                    .where((sk) => sk.type === s)
                    .orderByDescending((sk) => sk.usageTime.year)
                    .orderByDescending((sk) => sk.usageTime.month)
                    .toArray();
                  if (!isNaN(s as number) || skillset.length === 0) return;

                  return (
                    <>
                      <thead>
                        <tr>
                          <th>{s}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {skillset.map((skill, idx) => {
                          return (
                            <tr key={idx}>
                              <td>{skill.name}</td>
                              <td>{`${skill.usageTime.year} years  ${skill.usageTime.month} months`}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <td>
                        <div className="divider"></div>
                      </td>
                      <td>
                        <div className="divider"></div>
                      </td>
                    </>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { skills: state.skill };
};
export default connect(mapStateToProps)(Skill);
