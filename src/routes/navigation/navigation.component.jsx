import { Fragment } from 'react';
import {Outlet, Link } from 'react-router-dom';

import { ReactElement as CrwnLogo }  from '../../assets/crown.svg';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div>Logo</div>
        <h1>I am the navigation bar</h1>
        <div className='links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
        </div>
      </div>
      < Outlet />
      </Fragment>
  );
};


export default Navigation;