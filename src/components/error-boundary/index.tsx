/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type GithubProfileStatus } from '../../shared/interfaces/config.interface';
import type GithubProfileConfig from '../../shared/interfaces/config.interface';
import React from 'react';
import { connect } from 'react-redux';
export * from './erros';
class ErrorBoundary extends React.Component<
  GithubProfileStatus & { children?: any | undefined },
  any,
  any
> {
  render() {
    if (this.props.Error) {
      const { status, title, subTitle } = this.props.Error;

      return (
        <div className="min-w-screen min-h-screen bg-base-200 flex items-center p-5 lg:p-20 overflow-hidden relative">
          <div className="flex-1 min-h-full min-w-full rounded-3xl bg-base-100 shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
            <div className="w-full">
              <div className="mb-10 md:mb-20 mt-10 md:mt-20 text-gray-600 font-light">
                <h1 className="font-black uppercase text-3xl lg:text-5xl text-primary mb-10">
                  {status}
                </h1>
                <p className="text-lg pb-2 text-base-content">{title}</p>
                <div className="text-base-content text-opacity-60">
                  {subTitle}
                </div>
              </div>
            </div>
          </div>
          <div className="w-64 md:w-96 h-96 md:h-full bg-accent bg-opacity-10 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
          <div className="w-96 h-full bg-secondary bg-opacity-10 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>
      );
    }

    return this.props.children;
  }
}

const mapStateTopProps = (state: GithubProfileConfig) => {
  return state.status;
};
export default connect(mapStateTopProps)(ErrorBoundary);
