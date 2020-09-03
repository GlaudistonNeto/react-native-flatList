import React from 'react';

const PostContext = React.createContext();

export const PostProvider = ({ children }) => {
  const postages = [
    { title: 'Image Post #1' },
    { title: 'Image Post #2' },
    { title: 'Image Post #3' },
    { title: 'Image Post #4' },
    { title: 'Image Post #5' }
  ];

  return ( // exporting this prop provider
    <PostContext.Provider value={postages}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
