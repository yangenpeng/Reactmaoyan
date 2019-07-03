import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import { Section,ConentSwitch,ConentHC } from './style';
import Loadable from 'react-loadable';
// import Hot from './switch/hot'
const Hot = Loadable({
  loader: () => import('./switch/hot'),
  loading: () => <div>玩命加载中hot</div>
})
const Comming = Loadable({
  loader: () => import('./switch/comming'),
  loading: () => <div>玩命加载中</div>
})
export default class Movie extends Component {
  render() {
    return (
      <ConentSwitch>
        <Section className="topbar" >
          <div className="white-bg topbar-bg ">
            <div className="city-entry">
              <span className="city-name">深圳</span><i className="city-entry-arrow"></i>
            </div>
            <div className="switch-hot" data-active=".n-hot">
              <div className="hot-item " data-tab=".n-hot"><NavLink to='/movie/hot' className='switch'>正在热映</NavLink></div>
              <div className="hot-item" data-tab=".f-hot"><NavLink to='/movie/comming' className='switch'>即将上映</NavLink></div>
            </div>
            <div className="search-entry search-icon" data-type="movie"><i className="iconfont iconsousu"></i></div>
          </div>
        </Section>
        <ConentHC>
          <Switch>
            <Route path='/movie/hot' component={Hot} />
            <Route path='/movie/comming' component={Comming} />
          </Switch>
        </ConentHC>
      </ConentSwitch>
    )
  }
}

