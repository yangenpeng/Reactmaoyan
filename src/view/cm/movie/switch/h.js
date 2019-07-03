import styled from 'styled-components';
export const ItemList = styled.div`

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
 .version {
    background-size: contain;
    background-repeat: no-repeat;
    height: 14px;
    width: 17px;
    display: inline-block;
    margin-top: 5px;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    margin-right: 3px;
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
    .score-suffix{
      font-size: 13px;
    color: #666;
    }
    .grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
}
}

}

`
export const MovieList = styled.div`
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
    .default-img-bg {
    background-color: #e1e1e1;
    background-size: 100% 100%;
    img {
    background-color: transparent;
    height: 90px;
}
}
}
}
`
export const Img = styled.div`

    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
 .btn {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
    .default-img-bg{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
}
}

`
export const Hotout = styled.div`
   overflow-y:hidden;
`
