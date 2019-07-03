import Types from './actionTypes';
import http from '@/utils/http.js'
export const asyncHotList = () => {
  return (dispatch) => {
    http.get('/ajax/movieOnInfoList?token=', {
      headers: {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest"
      }
    })
      .then(res => {
        dispatch({
          type: "HotList",
          value: res
        })
      })
  }
}
