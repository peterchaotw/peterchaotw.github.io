/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ProfileConfig } from '../../shared/interfaces/config.interface';
import React from 'react';
import { connect } from 'react-redux';
import { setMode } from '../../store/slices/profile-controller.slice';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

class ProfileController extends React.Component<ProfileConfig, any, any> {
  getState() {
    const state = {
      isDarkMode: this.props.theme === 'dark',
    };

    return state;
  }

  handleChange(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    this.props.dispatch(setMode(theme));
    document.querySelector('html').setAttribute('data-theme', theme);
  }

  render() {
    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="grid place-items-center py-8">
          <label className="flex cursor-pointer gap-2">
            <MdOutlineLightMode size={24} />
            <input
              type="checkbox"
              value="dark"
              className="toggle"
              onChange={this.handleChange.bind(this)}
              checked={this.props.theme === 'dark'}
            />
            <MdOutlineDarkMode size={24} />
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return state.profileConfig;
};
export default connect(mapStateToProps)(ProfileController);
