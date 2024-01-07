/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ListItem from './list-item';
import { type SocialConfig } from '../../shared/interfaces/config.interface';
import type ILinked from '../../shared/interfaces/linked.interface';
import { isNullOrEmpty } from '../../shared/helpers/utilties';
import Linked from '../../assets/linked.config';

class Detail extends React.Component<{ social: SocialConfig }, any, any> {
  renderChilds() {
    const items: JSX.Element[] = [];
    for (const key in this.props.social) {
      const account = this.props.social[key];
      const config: ILinked = Linked[key];
      const props = {
        isEmpty: isNullOrEmpty(account) || config === null,
        value: account,
        key,
        ...config,
      };
      items.push(<ListItem {...props} />);
    }

    return items;
  }

  render(): React.ReactNode {
    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="text-base-content text-opacity-60">
            <Fragment>{this.renderChilds()}</Fragment>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { social: state.social };
};
export default connect(mapStateToProps)(Detail);
