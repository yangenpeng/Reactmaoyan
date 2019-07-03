import React, { Component } from 'react';
import { ItemList, MovieList, Img, Hotout } from './h.js';
import { connect } from 'react-redux';
import * as actions from '../store/actionCreates'
class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      span1: '观众评价',
      span2: "想看的人"
    }
  }
  render() {
    return (
      <Hotout ref="mycontent1" className="items">
        {
          this.props.movieList && this.props.movieList.map(item => {
            return (
              <MovieList className="item" data-id="1198925" data-bid="dp_wx_home_movie_list" key={item.id}>
                <div className="main-block">
                  <div className="avatar" sort-flag="">

                    <div className="default-img-bg">
                      <img src={item.img.replace('w.h', '128.180')} alt='22' />
                      {/* https://p0.meituan.net/128.180/moviemachine/5dac476535359b7bb951ff15d37a9d0b153821.jpg */}
                      {/* http://p0.meituan.net/128.18/moviemachine/5dac476535359b7bb951ff15d37a9d0b153821.jpg */}
                    </div>
                  </div>
                  <ItemList className="mb-outline-b content-wrapper">
                    <div className="column content">
                      <div className="box-flex movie-title">
                        <div className="title line-ellipsis v3dimax_title">{item.nm}</div>
                        <span className="version v3d imax"></span>
                      </div>
                      <div className="detail column">
                        <div className="score line-ellipsis">
                          <span className="score-suffix">{item.sc ? "观众评分" : "想看的人"} </span>
                          <span className="grade">{item.sc ? item.sc : item.wish}</span>
                        </div>
                        <div className="actor line-ellipsis"> {item.star ? "主演:" + item.star : null}</div>
                        <div className="show-info line-ellipsis">{item.showInfo}</div>
                        {/* 今天259家影院放映4474场 */}
                      </div>
                    </div>
                    <Img className="button-block" data-id="1198925">
                      <div className="btn normal"><span className="fix" data-bid="dp_wx_home_movie_btn">购票</span></div>
                    </Img>
                  </ItemList>
                </div>
              </MovieList>
            )
          })
        }
      </Hotout>
    )

  }
  onScroll() {
    // let scrollHeight = this.refs.mycontent1.scrollHeight;
    // let scrollTop = this.refs.mycontent1.scrollTop;
    // let clentHeight = this.refs.mycontent1.clientHeight;
    let scrollHeight = document.getElementsByClassName('items')[0].scrollHeight;
    let scrollTop = document.getElementsByClassName('items')[0].scrollTop;
    let clentHeight = document.getElementsByClassName('items')[0].clientHeight;
    if (scrollHeight - scrollTop - clentHeight < 50) {
      this.props.getHotList()
    }
  }
  componentDidMount() {

    this.props.getHotList()
    // window.addEventListener('scroll', this.onScroll,true)


  }
  componentDidUpdate() {
    console.log(this.props.movieList)
    // window.addEventListener('scroll', this.onScroll,true)


  }
}
const mapStateToProps = (state, props) => {
  return {
    movieList: state.hot.List.movieList
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getHotList() {
      dispatch(actions.asyncHotList())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Hot)

