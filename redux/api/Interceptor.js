import { showDialog, showNotification } from "../../Constant";

const timer = 3000;
// process untuk get dan delete data
export const processRespData = (resp) => {
  const {data}  = resp;
  const method = resp.config.method;
  
  if (parseInt(data.error) === 401) {
    showDialog('Error', data.message !== '' ? data.message : 'Error 401', 'error', timer);
    return false;
  }if (parseInt(data.error) === 0 && (method !== 'get' && method !== 'delete')) {
    showDialog('Sukses', data.message !== '' ? data.message : 'Fetching data sukses', 'success', timer);
    return false;
  } else if (parseInt(data.error) === 500) {
    showDialog('Gagal', data.message !== '' ? data.message : 'Error 500', 'error', timer);
    return false;
  }

  return data;
};
// proses untuk post data
export const processPostData = (resp) => {
  const {data}  = resp;
  const method = resp.config.method;
  if (parseInt(data.error) === 401) {
    showDialog('', data.message !== '' ? data.message : 'Error 401', 'error', timer);
    return false;
  }if (parseInt(data.error) === 0 && method === 'post') {
    showDialog('Sukses!', data.message !== '' ? data.message : 'Data telah berhasil disimpan oleh sistem...', 'success', timer);
    return false;
  } else if (parseInt(data.error) === 500) {
    showDialog('', data.message !== '' ? data.message : 'Error 500', 'error', timer);
    return false;
}

return data;
};
// proses untuk auth
export const processRespAuth = (resp) => {
  const {data}  = resp;
  if (parseInt(data.error) === 401) {
    showNotification('error', 'Error 401')
    return false;
  }if (parseInt(data.error) === 0) {
    showNotification('success', 'Login berhasil...')
    return false;
  } else if (parseInt(data.error) === 500) {
    showNotification('error', 'Check Email dan Password Anda...')
    return false;
  }

return data;
};