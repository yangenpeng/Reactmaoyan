import styled from 'styled-components';
export const Header = styled.header`
    height: 50.5px;
    color: #fff;
    background: #e54847;
    /* display:flex; */
  .nav-wrap-left{
    float:left;
    margin-top:5px;
    a{
      text-decoration:none;
      i{
        font-size:40px;
        color:white;
      }
    }
  }
  .nav-header{
    text-align:center;
    line-height:50.5px;
    padding-right: 33px;
    box-sizing: border-box;
  }
`
export const SearchInput = styled.section`
  .search-wrapper {
    background-color: #f5f5f5;
    height: 100vh;
    .search-header {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 0 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
    .input-wrapper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    -webkit-box-flex: 1;
    flex-grow: 1;
   .search-icon {
    width: 15px;
    height: 15px;
    margin-right: 6px;
    float: left;
    position: relative;
    top: 6px;
}
 .search-input {
    -webkit-box-flex: 1;
    flex: 1;
    border: none;
    font-size: 13px;
    color: #333;
    line-height: 20px;
    padding: 4px 0;
    width: calc(100% - 40px);
    outline:none;
}
}
.cancel {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    color: #f03d37;
}
}
.search-history {
    background-color: #fff;
}
}
.wish-toast {
    width: 100px;
    border-radius: 10px;
    background-color: hsla(0,0%,7%,.7);
    color: #fff;
    top: 50%;
    left: 0;
    right: 0;
    margin: -100px auto 0;
    padding: 10px;
}
`
export const SearchResult=styled.div`
  .result-wrapper {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .result {
    margin-bottom: 10px;
    background-color: #fff;
   h3 {
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
}
.list {
    padding-left: 15px;
    border-top: 1px solid #e6e6e6;
    .movie {
    border-bottom: none;
    .poster {
    background-color: #eee;
    width: 64px;
    height: 90px;
    float: left;
    margin-right: 10px;

}
}
}
}
}
.poster {
    background-color: #eee;
    width: 64px;
    height: 90px;
    float: left;
    margin-right: 10px;
}
.info{
  margin-right: 15px;
    margin-top: 1px;
  .name-score {
    font-size: 16px;
    color: #222;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 2px;
 .name {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .one-line {
    display: inline-block;
    font-weight: 700;
    font-size: 17px;
}
.version {
    background-size: contain;
    background-repeat: no-repeat;
    height: 14px;
    margin-left: 5px;
    display: inline-block;
}
}
 .wish {
    color: #fa0;
    font-size: 10px;
    flex-shrink: 0;
    padding-left: 5px;
    .num {
    font-size: 16px;
}
}
}
.detail-section {
    position: relative;
}
}
.one-line {
    display: inline-block;
    font-weight: 700;
    font-size: 17px;
}
.ename{
    font-size: 13px;
    color: #666;
    margin-top: 2px;
}
.catogary {
    font-size: 13px;
    color: #666;
    margin-top: 2px;
}
 .release {
    font-size: 13px;
    color: #666;
    margin-top: 2px;
}
.presale {
    background-color: #3c9fe6;
}
.buy-btn {
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    -webkit-align-self: flex-end;
    align-self: flex-end;
    flex-shrink: 0;
    width: 48px;
    text-align: center;
    height: 27px;
    line-height: 27px;
    right: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}
 .movie {
    padding: 12px 0;
    min-height: 90px;
}
`
