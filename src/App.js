import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Ctiy from './view/city';

const Home = Loadable({
  loader: () => import('./view/cm/index'),
  loading: () => <div>玩命加载中</div>
})
const Login = Loadable({
  loader: () => import('./view/login/index'),
  loading: () => <div>玩命加载中</div>
})
const Search = Loadable({
  loader: () => import('./view/search/index'),
  loading: () => <div>玩命加载中</div>
})
const City = Loadable({
  loader: () => import('./view/city/index'),
  loading: () => <div>wangmjiaz</div>
})
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: "电影" },
        { id: 2, name: "影院" },
        { id: 3, name: "我的" }
      ]
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/search" component={Search} />
          <Route path='/city' component={City} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
