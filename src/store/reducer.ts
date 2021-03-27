export interface Post {
  id: string;
  url: string;
}

export interface State {
  posts: Post[];
  loading: boolean;
}

/**
 * @TODO Should I use an enum or should I use a Union Type here?
 */
enum ActionTypes {
  SET_LOADING = 'SET_LOADING',
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILED = 'GET_POSTS_FAILED',
}

export interface Action {
  type: keyof typeof ActionTypes;
  payload?: any;
}

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
