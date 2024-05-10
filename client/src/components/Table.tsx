import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface TableProps {}

const Table: React.FC<TableProps> = () => {
  return (
    <table className='min-w-full'>
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default Table;
