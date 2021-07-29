import { appPost } from "../api/Caller";
import { processRespData } from "../api/Interceptor";

export const doSignIn = (data, history) => {
  return async (dispatch) => {
    // dispatch(fetchingProcess(true));
    const url = `/user/login`;
    let resp = await appPost({ url: url, data })
      .then((r) => r)
      .catch((e) => e);
    let result = processRespData(resp);
    if (resp.data.error === 0) {
      setTimeout(() => {
        dispatch({ type: "SIGN_IN", payload: resp.data.data.data });
        localStorage.setItem("token", resp.data.data.data);
        console.log(resp)
        history.push("/");
      }, 2000);
    //   dispatch(fetchingProcess(false));
    }
  };
};

export const doSignOut = (history) => {
  return async (dispatch) => {
    // dispatch(fetchingProcess(true));
    localStorage.removeItem("token");

    dispatch({ type: "SIGN_IN", payload: "" });
    if (localStorage.getItem("token") === null) {
      history.push("/login");
    }
    // dispatch(fetchingProcess(false));
  };
};