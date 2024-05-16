import React, { useEffect } from 'react';

interface SearchBarProps {
  onSearch: (search: string | undefined) => void;
  live?: boolean;
  onLive?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ live, onLive, onSearch }) => {
  const [search, setSearch] = React.useState<string | undefined>(undefined);

  useEffect(() => {
    // set time out to prevent too many requests
    const timeOutId = setTimeout(() => {
      if (search === '') {
        onSearch(undefined);
        return;
      }
      onSearch(search);
    }, 200);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <div className='w-full pt-4 px-4'>
      <div className='flex rounded-lg bg-[#f5f5f5] border-solid border-2 border-[#eaeaea]'>
        <input
          type='text'
          placeholder='Search name, email or action...'
          className='w-full bg-[#f5f5f5] py-2 px-4 focus:outline-none focus:border-2 focus:border-gray-600'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={onLive}
          className='self-end px-4 py-2 bg-red border-solid border-l-2 border-[#eaeaea] text-center text-[#616161] font-bold cursor-pointer hover:bg-[#f0f0f0]'
        >
          <div
            className={`w-2 h-2 rounded-full ${
              live ? 'bg-red-400' : 'bg-gray-400'
            } flex items-center justify-center`}
          />
          <span>LIVE</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
