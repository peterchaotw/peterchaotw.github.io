import {type GithubUserInfo} from 'src/shared/interfaces/config.interface';
import type GithubProfileConfig from 'src/shared/interfaces/config.interface';
import LazyImage from '../lazy-image';
import Skeleton from '../skeleton';
import React from 'react';
import { connect } from 'react-redux';
import { SkeletonConfigs } from '../../assets/consts';
import { fallbackImage } from '../../assets/images';

class AvatarCard extends React.Component<
  { profile: GithubUserInfo; resume?: string },
  any,
  any
> {
  render() {
    const { profile, resume } = this.props;
    const avatarRing = false;

    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="grid place-items-center py-8">
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : fallbackImage}
                  alt={profile.name ?? ''}
                  placeholder={<Skeleton {...SkeletonConfigs.full} />}
                />
              }
            </div>
          </div>
          <div className="text-center mx-auto px-8">
            <h5 className="font-bold text-2xl">
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            </h5>
            <div className="mt-3 text-base-content text-opacity-60 font-mono">
              {profile.bio}
            </div>
          </div>
          {resume && (
            <a
              href={resume}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: GithubProfileConfig) => {
  return {
    profile: state.github,
    resume: state.resume,
  };
};
export default connect(mapStateToProps)(AvatarCard);
