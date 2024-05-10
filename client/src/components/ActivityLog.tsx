import React from 'react';
import Table from './Table';
import SearchBar from './SearchBar';

interface ActivityLogProps {}

const ActivityLog: React.FC<ActivityLogProps> = () => {
  return (
    <div className='mx-auto max-w-4xl my-8 rounded-xl bg-[#f0f0f0]'>
      <SearchBar />
      <Table />
    </div>
  );
};

export default ActivityLog;
