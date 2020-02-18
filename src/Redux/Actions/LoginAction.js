import axios from "axios";
//import history from "../History";
import { STATIC_URL } from "../../config";
export function LoginAction(email, password, callback1, callback2) {
  return async function(dispatch) {
    let reqData = { email, password };
    let res = await axios.post(`${STATIC_URL}login`, reqData);
    if (res.data.status) {
      dispatch({
        type: "LOGIN_STATUS_CHECK",
        payload: res.data
      });
      localStorage.setItem("apiKey", res.data.apiKey);
      callback1();
    } else {
      callback2();
      alert("Wrong Credentials");
    }
  };
}

export function LogoutAction(callback) {
  return async function(dispatch) {
    let res = await axios.delete(`${STATIC_URL}logout`, {
      headers: {
        apiKey: localStorage.getItem("apiKey")
      }
    });
    if (res.data.status) {
      dispatch({
        type: "LOGIN_STATUS_CHECK",
        payload: { status: false }
      });
      localStorage.removeItem("apiKey");
      callback();
    } else {
      alert("Something went wrong");
    }
  };
}
