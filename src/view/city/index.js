import React, { Component } from 'react'
import { Conent } from './style'
import http from '../../utils/http'
export default class City extends Component {
  render() {
    return (
      <div>
        <Conent className="page-city">
          <van-nav-bar
            title="城市选择"
            left-text="返回"
            left-arrow
          />
          <div className="city-list">
            <div className="lv-indexlist">
              <ul className="lv-indexlist__content" id="lv-indexlist__content">
                <div className="recommend-city">
                  <div className="gprs-city">
                    <div className="city-index-title">GPS定位你所在城市</div>
                    <ul className="city-index-detail">
                      <li className="city-item-detail city-item-detail-gprs">
                        <div className="city-item-text">定位失败</div>
                      </li>
                    </ul>
                  </div>
                  <div className="hot-city">
                    <div className="city-index-title">热门城市</div>
                    <ul className="city-index-detail">
                      <li className="city-item-detail"

                      >
                        <div className="city-item-text">安阳</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <li className="lv-indexsection"

                >
                  <p className="lv-indexsection__index">拼音</p>
                  <ul>
                    <li

                    >
                      长安
              </li>
                  </ul>
                </li>
              </ul>
              <div className="lv-indexlist__nav">
                <ul>
                  <li
                  >
                    A
            </li>
                </ul>
              </div>
            </div>
          </div >
        </Conent >
      </div >
    )
  }
  getCity() {
    http.get('https://m.maizuo.com/gateway?k=9429029')
      .then(res => {
        console.log(res)
      })
  }
  componentDidMount() {
    this.getCity()
  }
}
