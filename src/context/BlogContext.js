import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const postages = [
    { title: 'Image #1' },
    { title: 'Image #2' },
    { title: 'Image #3' },
    { title: 'Image #4' },
    { title: 'Image #5' }
  ];

  return (
    <BlogContext.Provider value={postages}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
