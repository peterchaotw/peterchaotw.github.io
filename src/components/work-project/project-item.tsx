/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { type WorkExperienceConfig } from '../../shared/interfaces/config.interface';
import { CgEditBlackPoint } from 'react-icons/cg';
import SkillType from '../../shared/enums/skill-type';

export default class ProjectItem extends React.Component<
  WorkExperienceConfig,
  unknown,
  unknown
> {
  render(): React.ReactNode {
    return (
      <div className="collapse bg-base-200">
        <input type="checkbox" />

        <div className="collapse-title font-medium">{this.props.name}</div>
        <div className="collapse-content md:text-start">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex-grow">
                <>
                  <div className="italic font-extrabold flex-grow">Summary</div>
                  <div className="font-light gap-2 flex items-center my-1">
                    {this.props.description}
                  </div>
                </>

                <div className="divider"></div>

                <>
                  <div className="italic font-extrabold flex-grow">
                    Assigned Phase
                  </div>
                  {this.props.assignedPhase.map((p, idx) => (
                    <div className="flex flex-row" key={idx}>
                      <div className="self-center w-6">
                        <CgEditBlackPoint />
                      </div>
                      <div className="font-light flex-row">{p}</div>
                    </div>
                  ))}
                </>
                <div className="divider"></div>

                <>
                  <div className="italic font-extrabold flex-grow">
                    Responsibilities
                  </div>
                  {this.props.responsibilities.map((p, idx) => (
                    <div className="flex flex-row" key={idx}>
                      <div className="self-center w-6">
                        <CgEditBlackPoint />
                      </div>
                      <div className="font-light flex-row">{p}</div>
                    </div>
                  ))}
                </>

                <div className="divider"></div>

                <>
                  <div className="italic font-extrabold flex-grow">Skills</div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th>Team Size</th>
                          <td>{this.props.teamSize}</td>
                        </tr>
                        <tr>
                          <th>Role</th>
                          <td>{this.props.role}</td>
                        </tr>
                        {Object.values(SkillType).map((s, idx) => {
                          const skillset = this.props.skills
                            .where(
                              (sk) =>
                                sk.type ===
                                SkillType[s as keyof typeof SkillType],
                            )
                            .toArray();
                          if (!isNaN(s as number) || skillset.length === 0)
                            return;

                          return (
                            <tr key={idx}>
                              <th>
                                {s
                                  .toString()
                                  .replace(/([A-Z])/g, ' $1')
                                  .trim()}
                              </th>
                              <td>
                                {skillset.map((config, idx2) => (
                                  <div
                                    key={idx2}
                                    className="badge badge-outline m-1.5"
                                  >
                                    {config.name}
                                  </div>
                                ))}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
