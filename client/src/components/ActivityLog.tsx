import React from 'react';
import Table from './Table';

interface ActivityLogProps {}

const ActivityLog: React.FC<ActivityLogProps> = () => {
  return (
    <div className='mx-auto max-w-4xl my-8 rounded-xl'>
      <Table />
    </div>
  );
};

export default ActivityLog;
