import axios from 'axios';
import qs from 'querystring';
import { BaseUrl } from '../../utils/utils';

const Call = async (method, url, data = {}, token = '', headers = {}, options = {}, baseUrl = BaseUrl, timeout = 60000, resp = 'json') => {
    const config = {
        ...options,
        method,
        url,
        baseURL: baseUrl,
        data,
        timeout,
        responseType: resp,
        headers: { ...headers, 'bb-token' : token }
        
    }
    // console.log({ config });
    return await axios.request(config)
}

export const appPost = async (body) => {
    const { url, data, token, headers, baseUrl, timeout, resp } = body;
    return await Call('POST', url, data, token, headers, baseUrl, timeout, resp);
}

export const appGet = async (body) => {
    const { url, data, token, headers,options, baseUrl, timeout, resp } = body;
    // console.log(body);
    const params = qs.stringify(data);
    // console.log("params",params)
    return await Call('GET', url, params, token, headers, options, baseUrl, timeout, resp);
}

export const appDelete = async (body) => {
    const { url, data, token, headers, baseUrl, timeout, resp } = body;
    return await Call('DELETE', url, data, token, headers, baseUrl, timeout, resp);
}

export const appPatch = async (body) => {
    const { url, data, token, headers, baseUrl, timeout, resp } = body;
    return await Call('PATCH', url, data, token, headers, baseUrl, timeout, resp);
}
