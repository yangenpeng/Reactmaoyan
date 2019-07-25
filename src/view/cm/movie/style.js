import styled from 'styled-components';
export const Section = styled.section`
      border-bottom: 1px solid #e6e6e6;
    height: 44px;
    .topbar-bg {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 44px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .city-entry {
    padding-left: 15px;
    font-size: 15px;
    color: #666;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    .city-entry .city-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
    max-width: 19.2vw;
}
.city-entry-arrow {
    margin-right: 5px;
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
}

}
.switch-hot {
    display: -webkit-box;
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
    .switch-hot .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
 .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    width: 21.33333vw;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
}
.search-icon {
    width: 20px;
    height: 20px;
    background-size: 20px;
    padding: 10px 15px 10px 10px;
    .iconfont{
    font-size:30px;
      color:#ef4339;
    }
    a{
      text-decoration:none;
    }
}
.switch-hot{
  .active{
    display:inline-block;
    height:100%;
    border-bottom:2px solid red;
    text-decoration:none;
    color:red !important;
  }
  .switch{
    text-decoration:none;
    color:#666;
  }
}
}
`
export const ConentSwitch = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
`
export const ConentHC = styled.div`
  flex:1;
  overflow-y:auto;
`
