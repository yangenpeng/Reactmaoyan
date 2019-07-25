import React, { Component } from 'react';
import { Header, SearchInput, SearchResult } from './style';
import http from '@/utils/http.js';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      movieList: [],
      cinemaList: []
    }
  }

  render() {

    // let Movies;
    // if(this.state.movieList&&this.state.movieList.length>0){
    //   Movies=(
    //     <div>145</div>
    //   )
    // }
    return (

      <div>
        <Header className="navbar">
          <div className="nav-wrap-left">
            <a className="back" href=" " onClick={this.back}><i className="iconfont iconzuojiantou"></i></a>
          </div>
          <h1 className="nav-header">猫眼电影</h1>
        </Header>
        <SearchInput className="body" >
          <div className="search-wrapper" data-search-type="movie">
            <div className="search-header">
              <div className="input-wrapper">
                <img className="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt="" />
                <input className="search-input" type="text" placeholder="搜电影、搜影院" value={this.state.inputVal} onChange={this.Input} />
                <img className="del-input" style={{ display: 'none' }} src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt="" />
              </div>
              <div className="cancel">取消</div>
            </div>
            <div className="search-history">
            </div>
            {/* 搜电影、搜影院 */}
            <div className="search-result" >
              <div className="result-wrapper">
                <div className="search-result" >
                  <div className="result-wrapper">
                    <h3 style={{ display: this.state.movieList && this.state.movieList.length > 0 ? 'block' : "none" }}>电影/电视剧/综艺</h3>

                    {
                      this.state.movieList && this.state.movieList.map(item => {
                        return (
                          <SearchResult className="result" key={item.id}>
                            <div className="list">
                              <div className="movie cell" data-id="1218141">
                                <img className="poster" src={item.img.replace("w.h", "128.180")} alt="" />
                                {/* "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg" */}
                                <div className="info">
                                  <div className="name-score">
                                    <p className="name">
                                      <span className="one-line">{item.nm}</span>
                                      <span className="version "></span>
                                    </p>
                                    <span className="wish">
                                      <span className="num">{item.wish}</span>人想看
                                  </span>
                                  </div>
                                  <div className="detail-section">
                                    <div className="detail-items">
                                      <p className="ename one-line">The White Storm 2</p>
                                      <p className="catogary">剧情,动作,悬疑,犯罪</p>
                                      <p className="release">2019-07-05</p>
                                    </div>
                                    <div className="buy-btn presale" data-id="1218141">预售</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SearchResult>
                        )
                      })
                    }
                    <h3 style={{ display: this.state.movieList && this.state.movieList.length > 0 ? 'block' : "none", color: "red" }}>查看全部电影</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wish-toast" style={{ display: 'none' }}>
            <img className="toast-bg" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/toast-bg.png" alt='' />
            <span className="tips"></span>
          </div>
        </SearchInput>
      </div>
    )

  }
  //  SearchList = () => {
  //   }
  Input = (e) => {
    e.preventDefault();
    let value = e.target.value
    this.setState({
      inputVal: value
    })
    if (value) {
      this.SearchList(value);
    } else {
      this.setState({
        movieList: [],
        cinemaList: []
      })
    }

    // setTimeout(this.SearchList, 3000)
    // if (value === '') {
    //   console.log(111)
    //   this.setState({
    //     movieList: []
    //   })
    // }
  }
  SearchList(value) {
    http.get(`/ajax/search?kw=${value}&cityId=30&stype=-1`)
      .then(res => {
        // console.log(res.movies&&res.movies.list)
        this.setState({
          movieList: res.movies ? res.movies.list : [],
          cinemaList: res.cinemas
        })
      })
  }
  back = (e) => {
    console.log(22)
    e.preventDefault();
    window.history.back()
  }
  // componentWillUpdate(){
  //   return true
  // }
}

