import axios, { AxiosInstance, AxiosRequestConfig, ResponseType } from 'axios';

class AxiosBuilder {
  private baseURL: string = '';
  private headers: Record<string, any> = {};
  private timeout: number = 60000;
  private responseType: ResponseType = 'json';

  withBaseURL(baseURL: string): AxiosBuilder {
    this.baseURL = baseURL;
    return this;
  }

  withHeaders(headers: Record<string, any>): AxiosBuilder {
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  withTimeout(timeout: number): AxiosBuilder {
    this.timeout = timeout;
    return this;
  }

  withResponseType(responseType: ResponseType): AxiosBuilder {
    this.responseType = responseType;
    return this;
  }

  build(): AxiosInstance {
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: this.headers,
      timeout: this.timeout,
      responseType: this.responseType,
    };

    return axios.create(config);
  }
}

export default AxiosBuilder;
