import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface TableProps {
  loadedPages: number;
  q?: string;
}

const Table: React.FC<TableProps> = ({ loadedPages, q }) => {
  const pages = Array.from({ length: loadedPages }, (_, i) => i);

  return (
    <table className='min-w-full'>
      <TableHeader />
      {pages.map((page) => (
        <TableBody page={page} q={q} />
      ))}
    </table>
  );
};

export default Table;
