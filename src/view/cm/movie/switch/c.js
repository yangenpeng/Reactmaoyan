import styled from 'styled-components';
export const MostExpect = styled.div`
  padding: 12px 0 12px 15px;
    background-color: #fff;
    margin-bottom: 10px;
    /* display:flex; */
    display: -webkit-box;
    overflow:scroll;
    ::-webkit-scrollbar{width:0px}
    .title {
    margin: 0 0 12px;
    font-size: 14px;
    color: #333;
}
 .most-expected-list {
    /* overflow-y: hidden; */
    overflow:hidden;
    white-space: nowrap;
    flex-grow:0;
  .expected-item {
    display: inline-block;
    width: 85px;
    overflow: hidden;
    margin-right: 10px;
 .poster {
    width: 85px;
    height: 115px;
    position: relative;
    margin-bottom: 6px;
    img {
    height: 100%;
}
 .wish-bg {
    display: inline-block;
    width: 100%;
    height: 35px;
    position: absolute;
    bottom: 0;
    background-image: -webkit-linear-gradient(top,rgba(77,77,77,0),#000);
    background-image: linear-gradient(-180deg,rgba(77,77,77,0),#000);
}
.wish {
    position: absolute;
    left: 4px;
    bottom: 2px;
    color: #faaf00;
    font-size: 11px;
    font-weight: 600;
  .wish-num {
    position: absolute;
    left: 35px;
    bottom: 0px;
    color: #faaf00;
    font-size: 11px;
    font-weight: 600;
}
}
 .toggle-wish {
    width: 28px;
    line-height: 28px;
    background: rgba(61,63,71,.6);
    text-align: center;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
}
}
.name {
    margin: 0 0 3px;
    font-size: 13px;
    color: #222;
}
.date {
    margin: 0;
    font-size: 12px;
    color: #999;
}
}
}
`
export const ComingList = styled.div`
      background-color: #fff;
    .group-date {
    padding: 12px 15px 0;
    margin: 0;
    font-size: 14px;
    color: #333;
}
.item {
    padding-left: 15px;
    background-color: #fff;
     .main-block {
    position: relative;
    width: 100%;
  .avatar {
    width: 64px;
    height: 90px;
    position: relative;
    margin-top: 12px;
    float: left;
    :before {
    display: block;
    position: absolute;
    width: 46px;
    height: 46px;
    background-repeat: no-repeat;
    background-size: contain;
}
.default-img-bg {
    background-color: #e1e1e1;
    background-size: 100% 100%;
    img {
    background-color: transparent;
    height: 90px;
}
}
}
.content-wrapper {
    padding: 12px 14px 12px 0;
    margin-left: 74px;
    height: 90px;
    max-height: 90px;
    position: relative;
   .content {
    padding-right: 5px;
    margin-right: 48px;
    overflow: hidden;
    .movie-title {
    max-height: 24px;
    margin-bottom: 7px;
    line-height: 24px;
    overflow: hidden;
  .title {
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
}
}
.detail {
    box-sizing: border-box;
    line-height: 1;
    overflow: hidden;
    .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    .person {
    color: #faaf00;
    font-size: 15px;
    font-weight: 600;
}
.p-suffix {
    font-size: 13px;
    margin-left: -2px;
    display: inline-block;
    color: #666;
}
}
.actor {
    font-size: 13px;
    color: #666;
}
}
}
.button-block {
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
}

}
}
}
.button-block {
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
    .btn.pre {
    background-color: #3c9fe6;
     .fix{
       display:inline-block;
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    /* background-color: #f03d37; */
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
}
}
}
`
