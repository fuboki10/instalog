import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { Event } from '../utils/types';

interface TableProps {
  events: Event[];
}

const Table: React.FC<TableProps> = ({ events }) => {
  return (
    <table className='min-w-full'>
      <TableHeader />
      <TableBody events={events} />
    </table>
  );
};

export default Table;
