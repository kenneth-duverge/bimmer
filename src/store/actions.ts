import { Post } from "./reducer";

export const setLoading = (dispatch: any) => (payload: boolean) =>
  dispatch({ type: "SET_LOADING", payload });

export const getPosts = async (posts: Post[]) => posts;
