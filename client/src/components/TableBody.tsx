import React from 'react';
import { Event } from '../utils/types';
import TableRow from './TableRow';

interface TableBodyProps {
  events: Event[];
}

const TableBody: React.FC<TableBodyProps> = ({ events }) => {
  return (
    <tbody className='bg-white border-solid border-2 border-[#f5f5f5]'>
      {events.map((event, index) => (
        <TableRow event={event} key={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
