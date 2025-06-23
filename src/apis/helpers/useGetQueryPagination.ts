import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { QueryPaginationEnum } from '../../enums/TankStackQueryEnum';

function useGetQueryPagination(
  KEY: string | string[],
  url: string,
  params: Record<string, any> = {},
  options: Record<string, any> = {},
) {
  const axios = useAxios();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const page = urlParams.get('page') || QueryPaginationEnum.DEFAULT_PAGE;
  const per_page =
    urlParams.get('per_page') || QueryPaginationEnum.DEFAULT_PER_PAGE;

  const KEYS =
    typeof KEY === 'string'
      ? [KEY, params, page, per_page]
      : [...KEY, params, page, per_page];

  return useQuery({
    queryKey: KEYS,
    queryFn: async () => {
      const response = await axios.get(url, {
        params: {
          ...params,
          page,
          per_page,
        },
      });
      return (response?.data as any) ?? [];
    },
    ...options,
  });
}

export default useGetQueryPagination;
