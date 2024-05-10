import React from 'react';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className='pt-4 px-4'>
      <input
        type='text'
        placeholder='Search name, email or action...'
        className='w-full py-2 px-4 rounded-lg bg-transparent border-solid border-2 border-[#eaeaea] focus:outline-none focus:border-2 focus:border-gray-600'
      />
    </div>
  );
};

export default SearchBar;
