/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { type LanguageConfig } from '../../shared/interfaces/config.interface';
import LanguageType from '../../shared/enums/language-type';

class Language extends React.Component<
  { language: LanguageConfig[] },
  any,
  any
> {
  render(): React.ReactNode {
    const max = Object.keys(LanguageType).filter((value: unknown) =>
      isNaN(value as number),
    ).length;

    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              <span className="text-base-content opacity-70">Language</span>
            </h5>
          </div>
          <div className="p-3 flow-root">
            <div className="-m-1 flex flex-wrap justify-center">
              <table className="table table-xs table-pin-rows table-pin-cols">
                {this.props.language.map((value, idx) => {
                  return (
                    <Fragment key={idx}>
                      <tbody>
                        <tr key={idx}>
                          <td className="w-50">{value.name}</td>
                          <td className="w-full">
                            <progress
                              className="progress w-full"
                              value={value.proficiency + 1}
                              max={max}
                            ></progress>
                          </td>
                        </tr>
                      </tbody>
                    </Fragment>
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
  return { language: state.language };
};
export default connect(mapStateToProps)(Language);
