import { useMutation, UseMutationResult } from '@tanstack/react-query';
import useAxios from './useAxios'; // Adjust the import path as necessary
import { AxiosEnum } from '../../enums/Axios';

type DataToSend = {
  id: number | string;
  newData: any; // Define the type for updated data
};

interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: Record<string, any>;
  request?: any;
}

function useUpdateMutation<TResponse = any>(
  key: string,
  url: string,
  message: string = '',
): UseMutationResult<AxiosResponse<TResponse>, unknown, DataToSend, unknown> {
  const axios = useAxios();

  return useMutation<AxiosResponse<TResponse>, unknown, DataToSend, unknown>({
    mutationFn: async (dataToSend: DataToSend) => {
      const { id, newData } = dataToSend;
      const newUrl = `${url}/${id}`;
      const MutateData =
        newData instanceof FormData ? newData : { ...newData, _method: 'PUT' };
      const { data } = await axios.post<AxiosResponse<TResponse>>(
        newUrl,
        MutateData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            [AxiosEnum.HEADER_KEY]: key,
            [AxiosEnum.HEADER_CUSTOM_MESSAGE]: message,
          },
        },
      );
      return data;
    },
  });
}

export default useUpdateMutation;
