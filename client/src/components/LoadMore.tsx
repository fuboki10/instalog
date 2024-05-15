import React from 'react';

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className='min-w-full py-4 px-4 text-center text-[#616161] font-bold cursor-pointer hover:bg-[#f0f0f0]'
    >
      LOAD MORE
    </div>
  );
};

export default LoadMore;
