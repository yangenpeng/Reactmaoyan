import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Page, Header, Content, Footer } from './style/style'

const Cinema = Loadable({
  loader: () => import('./cinema/index'),
  loading: () => <div>玩命加载中</div>
})
const Movie = Loadable({
  loader: () => import('./movie/index'),
  loading: () => <div>玩命加载中</div>
})

export default class Home extends Component {
  render() {
    return (
      <Page>
        <Header>
          <h1>猫眼电影</h1>
        </Header>
        <Content>
          <Switch>
            <Route path='/cinema' component={Cinema} />
            <Route path='/movie' component={Movie} />
            <Redirect to="/movie" />
          </Switch>
        </Content>
        <Footer>
          <NavLink to='/movie'><div><span>电影</span><i className="iconfont icondianying1"></i></div></NavLink>
          <NavLink to='/cinema'><div><span>影院</span><i className="iconfont iconyingyuana"></i></div></NavLink>
          <NavLink to='/login'><div><span>我的</span><i className="iconfont iconwode"></i></div></NavLink>
        </Footer>
      </Page>
    )
  }
}
