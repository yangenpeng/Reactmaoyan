import styled from 'styled-components';

export const Page = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`
export const Header = styled.div`
  height:50px;
  background:red;
  font-size:18px;
  color:white;
  h1{
    text-align:center;
    line-height:50px;
  }
`
export const Content = styled.div`
  flex:1;
`
export const Footer = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  height:48px;

  /* background:pink; */
  border-top:1px solid #ccc;

  a{
    text-decoration:none;
    color:black;

  }
  div{
    display:flex;
    flex-direction:column-reverse;
    justify-content:space-around;
    align-items:center;
  }
  .iconfont{
    font-size:20px;
  }
 .active{
    color:#f03d37;
  }
`
