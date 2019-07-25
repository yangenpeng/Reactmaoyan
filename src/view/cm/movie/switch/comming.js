import React, { Component } from 'react';
import http from '@/utils/http.js'
import { MostExpect, ComingList } from './c';
export default class Comming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MostExpect: [],
      coming: []
    }
  }

  render() {
    return (
      <div >
        <p className="title">近期最受期待</p>
        <MostExpect className="most-expected" >
          {/* <p className="title">近期最受期待</p> */}
          {
            this.state.MostExpect && this.state.MostExpect.map(item => {
              return (
                <div className="most-expected-list" key={item.id}>
                  <div className="expected-item" data-id="1218141">
                    <div className="poster default-img-bg">
                      <img src={item.img.replace("w.h", "170.230")} alt='' />
                      <span className="wish-bg"></span>
                      <span className="wish"><span className="wish-num">{item.wish}</span>想看人</span>
                      <div className="toggle-wish" data-wishst="0" data-movieid="1218141">
                        <span></span>
                      </div>
                    </div>
                    <h5 className="name line-ellipsis">{item.nm}</h5>
                    <p className="date">{item.comingTitle.substring(0, 4)}</p>
                  </div>
                </div>
              )
            })
          }

        </MostExpect>
        <div style={{ width: '100%', height: '5px', background: "#ccc" }}></div>
        <ComingList className="coming-list">
          {
            this.state.coming && this.state.coming.map(item => {
              return (
                <div key={item.id}>
                  <p className="group-date">{item.comingTitle}</p>
                  <div className="item" data-id="1218141" data-bid="dp_wx_home_movie_list">
                    <div className="main-block">
                      <div className="avatar" sort-flag="">
                        <div className="default-img-bg">
                          <img src={item.img.replace("w.h", "128.180")} alt='' />
                          {/* https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg */}
                        </div>
                      </div>
                      <div className="mb-outline-b content-wrapper">
                        <div className="column content">
                          <div className="box-flex movie-title">
                            <div className="title line-ellipsis ">{item.nm}</div>
                          </div>
                          <div className="detail column">
                            <div className="wantsee line-ellipsis">
                              <span className="person">{item.wish}</span>
                              <span className="p-suffix">人想看</span>
                            </div>
                            <div className="actor line-ellipsis">主演: {item.star}</div>
                            <div className="actor line-ellipsis">{item.rt}上映</div>
                          </div>
                        </div>
                        <div className="button-block" data-id="1218141">
                          <div className="btn pre" data-id="1218141"><span className="fix" data-bid="dp_wx_home_movie_btn">预售</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </ComingList>
      </div>
    )
  }
  hotOnscroll = () => {
    let scrollTop = document.getElementsByClassName('sc-bZQynM')[0].scrollTop;
    let clientHeight = document.getElementsByClassName('sc-bZQynM')[0].clientHeight;
    let scrollHeight = document.getElementsByClassName('sc-bZQynM')[0].scrollHeight;
    if (scrollHeight - scrollTop - clientHeight < 50) {
      this.getComing()
    }
    // console.log(scrollTop, clientHeight, scrollHeight)

  }
  getComing() {
    http.get('/ajax/comingList?ci=30&token=&limit=10')
      .then(res => {
        console.log(res.coming);
        this.setState({
          coming: [...this.state.coming, ...res.coming]
        })
      })
  }
  getMostExpect() {
    http.get('ajax/comingList?ci=30&token=&limit=10')
      .then(res => {
        this.setState({
          MostExpect: res.coming
        })
      })
  }
  componentDidMount() {
    this.getMostExpect();
    this.getComing();

    window.addEventListener("scroll", this.hotOnscroll, true)
  }
}

