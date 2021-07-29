import { showNotification } from "../../utils/utils";

const timer = 3000;
// process untuk get dan delete data
export const processRespData = (resp) => {
  const {data}  = resp;
  console.log("process", data)
  if (parseInt(data.error) !==0) {
    showNotification('error', data.message, 'Error', 3000);
    return false;
  } else if (parseInt(data.error) === 0) {
    showNotification('success', data.message, 'Success', 3000);
    return false;
  }

  return data;
};