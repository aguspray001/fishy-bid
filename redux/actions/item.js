import { processRespData } from "../api/Interceptor";
import { appGet } from "../api/Caller";

export const getDataItemsByMarketId = (marketId) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const url = `/item/?market_id=${marketId}`;
    let resp = await appGet({ url: url, token: token })
      .then((r) => r)
      .catch((e) => e);
    let result = processRespData(resp);
    if (resp.data.error === 0) {
      const payload = resp.data.data;
      dispatch({ type: "GET_DATA_ITEM_BY_MARKET_ID", payload });
    }
  };
};
