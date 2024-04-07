export type GitIssues = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GitUser;
  labels: GitLabels[];
  state: string;
  locked: number;
  assignee: null;
  milestone: null;
  comments: number;
  created_at: string;
  updated_at: string;
  closedAt: null;
  author_association: string;
  active_lock_reason: null;
  draft: boolean;
  pull_request: GitPullRequest;
  body: string;
};

export type GitUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: number;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  receivedEvents_url: string;
  type: GitUser;
  siteAdmin: false;
};

export type GitLabels = {
  id: number;
  nodeId: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
};

export type GitPullRequest = {
  url: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  merged_at: null;
};
