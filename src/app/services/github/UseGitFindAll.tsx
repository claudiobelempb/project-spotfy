import { api } from '@/app/http/api';
import { Repositorio } from '@/app/types/Repositorio';
import { AxiosResponse } from 'axios';

export const UseGitFindAll = async (
  newRepo: string
): Promise<AxiosResponse> => {
  const response: AxiosResponse<Repositorio> = await api.get(
    `/repos/${newRepo}`
  );
  return response;
};
