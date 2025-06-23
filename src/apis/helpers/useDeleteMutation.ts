import { useMutation, UseMutationResult } from '@tanstack/react-query';
import useAxios from './useAxios';
import { AxiosEnum } from '../../enums/Axios';
import { AxiosResponse } from '../../types/axios';

type DataToSend = {
  id: number | string;
};

function useDeleteMutation<TResponse = any>(
  key: string,
  url: string,
  message: string = '',
): UseMutationResult<AxiosResponse<TResponse>, unknown, DataToSend, unknown> {
  const axios = useAxios();

  return useMutation<AxiosResponse<TResponse>, unknown, DataToSend, unknown>({
    mutationFn: async (dataToSend: DataToSend) => {
      const { data } = await axios.delete<AxiosResponse<TResponse>>(
        `${url}/${dataToSend.id}`,
        {
          headers: {
            [AxiosEnum.HEADER_KEY]: key,
            [AxiosEnum.HEADER_CUSTOM_MESSAGE]: message,
          },
        },
      );
      return data;
    },
  });
}

export default useDeleteMutation;
