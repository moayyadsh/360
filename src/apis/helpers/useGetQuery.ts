import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

function useGetQuery(
  KEY: string | string[],
  url: string,
  params: Record<string, any> = {},
  options: Record<string, any> = {},
) {
  const axios = useAxios();

  const KEYS = typeof KEY === 'string' ? [KEY, params] : [...KEY, params];
  return useQuery({
    queryKey: KEYS,
    queryFn: async () => {
      const response = await axios.get(url, { params });
      return response?.data ?? [];
    },
    ...options,
  });
}

export default useGetQuery;
