import React from 'react';

interface TableHeaderProps {}

const TableHeader: React.FC<TableHeaderProps> = () => {
  return (
    <thead className='text-[#616161]'>
      <tr>
        <th className='px-6 py-4 text-start'>ACTOR</th>
        <th className='px-6 py-4 text-start'>ACTION</th>
        <th className='px-6 py-4 text-start'>DATE</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
