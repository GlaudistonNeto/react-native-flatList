import React, { useReducer } from 'react';

const PostContext = React.createContext();

const postReducer = (state, action) => {
  switch (action.type) {
    case 'add_photo':
      return [...state, { title: `image #${state.length + 1}` }]
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [postages, dispatch] = useReducer(postReducer, []);

  const addPhoto = () => {
    dispatch({ type: 'add_photo' });
  };

  return (
    <PostContext.Provider value={{ data: postages, addPhoto }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
