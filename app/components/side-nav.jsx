import React from 'react';
import Session  from 'model/session';


import { Link } from 'react-router'

class SideNav extends React.Component {
  render() {
    return ( 
      <div className='side-nav bg-faded'>
        <Link className='item' activeClassName='active' to='/'>
          <i className='fa fa-tachometer'></i>Dashboard
        </Link> 
        
        <Link className='item' activeClassName='active' to='/cases'>
          <i className='fa fa-briefcase'></i>Case Load
        </Link>

        <Link className='item' activeClassName='active' to='/notes'>
          <i className='fa fa-sticky-note-o'></i>Notes
        </Link>

        <div className='subsection'>People</div>


        <Link className='item' activeClassName='active'  to='/children'>
          <i className='fa fa-child'></i>Children
          </Link>
        <Link className='item' activeClassName='active'  to='/facilities'>
          <i className='fa fa-building-o'></i>Providers
        </Link>
        
        <Link className='item' activeClassName='active'  to='/family'>
          <i className='fa fa-user'></i>Bio/Family
        </Link>

        <div className='subsection'>Admin</div>

        <Link className='item' activeClassName='active' to='/offices'>
          <i className='fa fa-building'></i>Offices
        </Link>

        <Link className='item' activeClassName='active' to='/staff'>
          <i className='fa fa-users'></i>Staff
        </Link>



        <Link className='item' activeClassName='active'  to='/reports'>
          <i className='fa fa-line-chart'></i>Reports
        </Link>

      </div>
    )
  }
}

SideNav.contextTypes = {
  router: React.PropTypes.func.isRequired
};


export default SideNav;
