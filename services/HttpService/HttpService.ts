import {
  HttpServiceInterface,
  RequestConfig,
  RequestParams,
  Response,
} from "@/types";
import axios, { type AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export class HttpService implements HttpServiceInterface {
  public get<T>(
    path: string,
    params: RequestParams = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.get<T>(path, { ...config, params });
  }

  public post<T>(
    path: string,
    data: any = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.post<T>(path, data, config);
  }

  public put<T>(
    path: string,
    data: any = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.put<T>(path, data, config);
  }

  public patch<T>(
    path: string,
    data: any = {},
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.patch<T>(path, data, {
      ...config,
      headers: {
        ...config.headers,
        accept: "*/*",
      },
    });
  }

  public delete<T>(
    path: string,
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return axiosInstance.delete<T>(path, config);
  }
}

export default new HttpService();
