import React, { Ref } from 'react';
import { NavLink } from 'react-router-dom';

type AppNavLinkProps = {
  activeClassName: string;
  className: string;

  [x: string]: any;
};

const AppNavLink = React.forwardRef(function AppNavLink(
  { activeClassName, className, ...rest }: AppNavLinkProps,
  ref: Ref<HTMLAnchorElement>,
) {
  return (
    <NavLink
      ref={ref}
      to={rest.to}
      {...rest}
      className={({ isActive }) =>
        isActive ? `${activeClassName} ${className}` : className
      }
    >
      {rest.children}
    </NavLink>
  );
});

export default AppNavLink;
