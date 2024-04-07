import { api } from '@/app/http/api';
import { GitIssues } from '@/app/types/Issues';
import { Repositorio } from '@/app/types/Repositorio';
import { AxiosResponse } from 'axios';

type UseGitRepoIssuesFindAllProps = {
  name: string;
  per_page?: number;
  state?: 'open' | 'closed' | 'all';
};

export const UseGitRepoIssuesFindAll = async ({
  name,
  per_page,
  state
}: UseGitRepoIssuesFindAllProps): Promise<AxiosResponse[]> => {
  const response = await Promise.all([
    await api.get<AxiosResponse<Repositorio>>(`/repos/${name}`),
    await api.get<AxiosResponse<GitIssues[]>>(`/repos/${name}/issues`, {
      params: {
        state,
        per_page
      }
    })
  ]);
  return response;
};
