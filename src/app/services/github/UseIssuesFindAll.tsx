import { api } from '@/app/http/api';
import { GitIssues } from '@/app/types/Issues';
import { AxiosResponse } from 'axios';

type UseGitRepoIssuesFindAllProps = {
  name: string;
  page?: number;
  per_page?: number;
  state?: 'open' | 'closed' | 'all';
};

export const UseIssuesFindAll = async ({
  name,
  page,
  per_page,
  state
}: UseGitRepoIssuesFindAllProps): Promise<AxiosResponse> => {
  const response = await api.get<AxiosResponse<GitIssues>>(
    `/repos/${name}/issues`,
    {
      params: {
        state,
        name,
        page,
        per_page
      }
    }
  );

  return response;
};
