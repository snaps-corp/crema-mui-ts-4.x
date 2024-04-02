// import React, { memo } from 'react';
// import { VelocityTransitionGroup } from 'velocity-react';
// import 'velocity-animate/velocity.ui';
//
// type Props = {
//   enter?: any;
//   leave?: any;
//   [x: string]: any;
// };
//
// const enterAnimationDefaults = {
//   animation: 'transition.fadeIn',
//   stagger: 50,
//   duration: 200,
//   display: null,
//   visibility: 'visible',
//   delay: 0,
// };
//
// const leaveAnimationDefaults = {
//   animation: 'transition.slideUpOut',
//   backwards: 150,
//   duration: 200,
//   display: null,
//   visibility: 'visible',
//   delay: 0,
// };
//
// const AppAnimateGroup = ({ ...props }: Props) => {
//   return (
//     <VelocityTransitionGroup
//       {...props}
//       enter={{ ...enterAnimationDefaults, ...props.enter }}
//       leave={{ ...leaveAnimationDefaults, ...props.leave }}
//     />
//   );
// };
//
// AppAnimateGroup.defaultProps = {
//   enter: enterAnimationDefaults,
//   leave: leaveAnimationDefaults,
//   easing: [0.4, 0.0, 0.2, 1],
//   runOnMount: true,
//   enterHideStyle: {
//     visibility: 'visible',
//   },
//   enterShowStyle: {
//     visibility: 'hidden',
//   },
// };
//
// export default memo(AppAnimateGroup);

import React, { memo } from 'react';
import Box from '@mui/material/Box';

type AppAnimateProps = {
  [x: string]: any;
};

const AppAnimateGroup: React.FC<AppAnimateProps> = (props) => {
  return <Box {...props}>{props.children}</Box>;
};
export default memo(AppAnimateGroup);
