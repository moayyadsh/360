import { useMutation, UseMutationResult } from '@tanstack/react-query';
import useAxios from './useAxios';
import { AxiosEnum } from '../../enums/Axios';

interface MutationData {
  [key: string]: any;
}

function useAddMutation<TResponse = any>(
  key: string,
  url: string,
  message: string = '',
): UseMutationResult<TResponse, unknown, MutationData, unknown> {
  const axios = useAxios();
  return useMutation<TResponse, unknown, MutationData, unknown>({
    mutationFn: async (dataToSend: MutationData) => {
      const response = await axios.post<TResponse>(url, dataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          [AxiosEnum.HEADER_KEY]: key,
          [AxiosEnum.HEADER_CUSTOM_MESSAGE]: message,
        },
      });

      return response.data;
    },
  });
}

export default useAddMutation;
