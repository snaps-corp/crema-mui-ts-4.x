// import React, { memo } from 'react';
// import './velocity-react.d';
// import { VelocityComponent } from 'velocity-react';
// import 'velocity-animate/velocity.ui';
//
// type AppAnimateProps = {
//   [x: string]: any;
// };
//
// const AppAnimate: React.FC<AppAnimateProps> = (props) => {
//   const children = React.cloneElement(props.children, {
//     style: {
//       ...props.children.style,
//       visibility: 'hidden',
//     },
//   });
//   console.log('AppAnimate', props);
//   return <VelocityComponent {...props}>{children}</VelocityComponent>;
// };
//
// AppAnimate.defaultProps = {
//   animation: 'transition.fadeIn',
//   runOnMount: true,
//   targetQuerySelector: null,
//   interruptBehavior: 'stop',
//   visibility: 'visible',
//   duration: 400,
//   delay: 100,
//   easing: [0.4, 0.0, 0.2, 1],
//   display: null,
//   setRef: undefined,
// };
//
// export default memo(AppAnimate);

import React, { memo } from "react";

type AppAnimateProps = {
  [x: string]: any;
};

const AppAnimate: React.FC<AppAnimateProps> = (props) => {
  return <div>{props.children}</div>;
};

export default memo(AppAnimate);
