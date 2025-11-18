import React from 'react';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1240px] mx-auto px-5 xl:px-0 flex-1">{children}</div>;
};

export default ContentWrapper;
