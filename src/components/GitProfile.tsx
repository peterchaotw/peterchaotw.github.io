/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, type ReactNode } from 'react';
import AvatarCard from './avatar-card';
import Detail from './detail';
import Skill from './skill';
import Certification from './certification';
import Education from './education';
import Footer from './footer';
import ProfileController from './profile-contoller';
import '../assets/index.css';
import { defaultColors } from '../assets/consts';
import { connect } from 'react-redux';
import { githubThunk } from '../store/slices/gitprofile.slice';
import type GithubProfileConfig from '../shared/interfaces/config.interface';
import Language from './language';
import WorkProject from './work-project';
class GitProfile extends React.Component<any, any, any> {
  async componentDidMount(): Promise<void> {
    await this.props.dispatch(githubThunk(this.props.github));
  }

  render(): ReactNode {
    return (
      <>
        <div className="fade-in h-screen">
          <Fragment>
            <div className={`p-4 lg:p-10 min-h-full ${defaultColors.bg}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
                <div className="col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    <ProfileController />
                    <AvatarCard />
                    <Detail />
                    <Skill />
                    <Language />
                    <Education />
                    <Certification />
                  </div>
                </div>
                <div className="lg:col-span-2 col-span-1">
                  <div className="grid grid-cols-1 gap-6">
                    <WorkProject />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </Fragment>
        </div>
      </>
    );
  }
}

const mapStateTopProps = (state: GithubProfileConfig) => {
  return state;
};
export default connect(mapStateTopProps)(GitProfile);
