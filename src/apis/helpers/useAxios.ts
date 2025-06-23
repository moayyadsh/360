import AxiosBuilder from './AxiosBuilder';
import { AxiosEnum } from '../../enums/Axios';

function useAxios() {
  const buildAxios = new AxiosBuilder()
    .withBaseURL(AxiosEnum?.BASEURL as string)
    .withResponseType(AxiosEnum.RESPONSE_TYPE)
    .withTimeout(AxiosEnum.TIMEOUT)
    .withHeaders({ Accept: 'application/json' });
  const axios = buildAxios.build();

  return axios;
}

export default useAxios;
