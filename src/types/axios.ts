export interface ErrorResponse {
  request: {
    status: number;
  };
  response: {
    data: {
      message?: string;
      code?: number;
      [key: string]: any;
    };
  };
  config: {
    method: string;
    headers: Record<string, string>;
  };
}

export interface MutationData {
  [key: string]: any;
}

export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: Record<string, any>;
  request?: any;
}

// export type QueryConfig = {
//   KEY: string | string[],
//   url: string,
//   message?: string,
//   params?: any ,
//   options?: any ,

// }

export enum AxiosQueryStatusEnum {
  ERROR = 'error',
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
}

export type AxiosQueryStatusType = 'error' | 'idle' | 'pending' | 'success';
