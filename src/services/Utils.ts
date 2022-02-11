import Axios, { AxiosRequestConfig, Method, ResponseType } from "axios";

/**
 * Returns an AxiosRequest with Authorization headers using JWT if available
 *
 * @param {string} method
 * @param {string} url
 * @param {object} params
 */
 export const requestBuilder = <T = any>(
  method: Method,
  url: string,
  params?: any,
  data?: any,
  responseType?: ResponseType 
) => {
  const config: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    responseType
  };

  return Axios.request<T>(config);
};

export const getCamelCase = (str: string) => str.charAt(0).toUpperCase() + str.replace(/([a-z0-9])([A-Z])/g, '$1 $2').slice(1);
