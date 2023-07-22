export enum LoadingStatus {
  idle = "idle",
  pending = "pending",
  succeeded = "succeeded",
  failed = "failed",
}

export type Loading =
  | LoadingStatus.idle
  | LoadingStatus.failed
  | LoadingStatus.succeeded
  | LoadingStatus.failed;

export interface PostType {
  id: number;
  title: string;
  body: string;
}

export interface InitialStateType {
  [x: string]: any;
  posts: PostType[];
  isLoading: LoadingStatus | null;
  error: string | null;
}
