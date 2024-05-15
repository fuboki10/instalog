import React, { useEffect } from 'react';

interface SearchBarProps {
  onSearch: (search: string | undefined) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = React.useState<string | undefined>(undefined);

  useEffect(() => {
    // set time out to prevent too many requests
    const timeOutId = setTimeout(() => {
      console.log(search);
      if (search === '') {
        onSearch(undefined);
        return;
      }
      onSearch(search);
    }, 200);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <div className='pt-4 px-4'>
      <input
        type='text'
        placeholder='Search name, email or action...'
        className='w-full py-2 px-4 rounded-lg bg-transparent border-solid border-2 border-[#eaeaea] focus:outline-none focus:border-2 focus:border-gray-600'
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
