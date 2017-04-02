import _ from 'lodash';
import cx from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

class TabBar extends React.Component {
  render() {
    return (
      <div className='TabBar'>
        {_.map(this.props.tabs, (tab) => {
          const linkClassName = cx('TabBar-tab', this.props.tabClassName, tab.className);
          return (
            <NavLink key={tab.to}
              activeClassName='TabBar-tabActive'
              className={linkClassName}
              to={tab.to}>
              {/*<div className='TabBar-tabIcon'>{tab.icon}</div>*/}
              <div className='TabBar-tabName'>
                {tab.name}
              </div>
            </NavLink>
          );
        })}
      </div>
    );
  }
}

TabBar.propTypes = {
  tabClassName: React.PropTypes.string,
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    className: React.PropTypes.string,
    icon: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default TabBar;
