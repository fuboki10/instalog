import React from 'react';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Search name, email or action...'
        className='w-full py-4 px-4 rounded-lg bg-transparent'
      />
    </div>
  );
};

export default SearchBar;
