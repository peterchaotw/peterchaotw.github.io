import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ListItem from './list-item';
import { type LanguageConfig } from 'src/shared/interfaces/config.interface';

class Language extends React.Component<
  { language: LanguageConfig[] },
  any,
  any
> {
  render(): React.ReactNode {
    return (
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="text-base-content text-opacity-60">
            <Fragment>
              {this.props.language.map((value, idx) => {
                return <ListItem key={idx} {...value} />;
              })}
            </Fragment>
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
