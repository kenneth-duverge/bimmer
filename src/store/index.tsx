import React, { createContext, Dispatch, useContext, useReducer } from 'react';

import reducer, { State, Action } from './reducer';

import * as actions from './actions';

interface Dispatcher {
  setLoading: (loading: boolean) => void;
  getPosts: () => void;
}

const StoreContext = createContext<State>({
  posts: [],
  loading: true,
});
const DispatchContext = createContext<Dispatcher>({
  setLoading: () => {},
  getPosts: () => {},
});

interface Props {
  children: React.ReactChild;
}

const initialState: State = {
  posts: [
    {
      id: '1',
      title: 'The Lot',
      url: require('../../assets/images/taxi-1.jpg'),
    },
    { id: '2', title: 'Night', url: require('../../assets/images/taxi-2.jpg') },
    {
      id: '3',
      title: "Swankin'",
      url: require('../../assets/images/taxi-3.jpg'),
    },
    {
      id: '4',
      title: "Crusiin'",
      url: require('../../assets/images/taxi-4.jpg'),
    },
  ],
  loading: false,
};

const initDispatcher = (dispatch: Dispatch<Action>) => ({
  setLoading: (loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  },
  getPosts: () => {
    console.log('Calling');
    dispatch({ type: 'GET_POSTS_REQUEST' });

    actions
      .getPosts(initialState.posts)
      .then((data) => {
        console.log({ data });
        dispatch({ type: 'GET_POSTS_SUCCESS', payload: data });
      })
      .catch((err) => dispatch({ type: 'GET_POSTS_FAILED', payload: err }));
  },
});

export default function StoreProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={initDispatcher(dispatch)}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);
export const useDispatch = () => useContext(DispatchContext);
