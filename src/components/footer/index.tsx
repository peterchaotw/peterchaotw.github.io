import { ReactNode } from 'react';
import React from 'react';

export default class Footer extends React.Component {
  render(): ReactNode {
    return (
      <footer>
        <div className="card compact bg-base-100 shadow"></div>
      </footer>
      // <footer
      //   className={`p-4 footer ${defaultColors.bg} text-base-content footer-center`}
      // >
      //   <div className="card compact bg-base-100 shadow">
      //     <div className="card-body">
      //       <Skeleton {...{ width: 'w-52', height: 'h-6' }} />
      //     </div>
      //   </div>
      // </footer>
    );
  }
}
