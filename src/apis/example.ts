import {
  useAddMutation,
  useDeleteMutation,
  useGetQuery,
  useUpdateMutation,
} from './helpers';

const API = {
  GET: '/example',
  ADD: '/example',
  DELETE: '/example',
  UPDATE: '/example',
};

const KEY = 'example';

export const useGetExample = (params?: any, options?: any) =>
  useGetQuery(KEY, API.GET, params, options);
export const useAddExample = () => useAddMutation(KEY, API.ADD);
export const useUpdateExample = () => useUpdateMutation(KEY, API.ADD);

export const useDeleteExample = () => useDeleteMutation(KEY, API.ADD);
