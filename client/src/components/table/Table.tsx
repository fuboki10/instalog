import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

interface TableProps {
  loadedPages: number;
  q?: string;
  live?: boolean;
}

const Table: React.FC<TableProps> = ({ loadedPages, q, live }) => {
  const pages = Array.from({ length: loadedPages }, (_, i) => i);

  return (
    <table className='min-w-full'>
      <TableHeader />
      {pages.map((page) => (
        <TableBody key={`page_${page}`} page={page} q={q} live={live} />
      ))}
    </table>
  );
};

export default Table;
