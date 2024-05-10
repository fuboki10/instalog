import React from 'react';
import { Event } from '../utils/types';

interface TableBodyProps {
  events: Event[];
}

const TableBody: React.FC<TableBodyProps> = ({ events }) => {
  return (
    <tbody className='bg-white border-solid border-2 border-[#f5f5f5]'>
      {events.map((event) => (
        <tr key={event.id}>
          <td className='flex gap-3 items-center px-6 py-4 text-start whitespace-nowrap'>
            <div className='flex items-center justify-center h-7 w-7 text-center text-white font-bold text-sm rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
              {event.actor_name[0]}
            </div>
            {event.target_name}
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-start'>
            {event.action.name}
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-start'>
            {event.occurred_at.toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
