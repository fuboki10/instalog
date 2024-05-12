import React, { useState } from 'react';
import { Event } from '../utils/types';

interface TableRowProps {
  event: Event;
}

interface ViewProps {
  event: Event;
  onClick: () => void;
}

const RowView: React.FC<ViewProps> = ({ event, onClick }) => (
  <tr key={event.id}>
    <td className='flex gap-3 items-center px-6 py-4 text-start whitespace-nowrap'>
      <div className='flex items-center justify-center h-7 w-7 text-center text-white font-bold text-sm rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
        {event.actor_name[0]}
      </div>
      {event.target_name}
    </td>
    <td className='px-6 py-4 whitespace-nowrap text-start'>
      {event.action_name}
    </td>
    <td className='px-6 py-4 whitespace-nowrap text-start'>
      {event.occurred_at.toLocaleString()}
    </td>
    <td>
      <button onClick={onClick}>
        <svg
          className='h-8 w-8 text-[#a0a0a0]'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <polyline points='6 9 12 15 18 9' />
        </svg>
      </button>
    </td>
  </tr>
);

const DetailedView: React.FC<ViewProps> = ({ event, onClick }) => (
  <tr>
    <td>
      <button onClick={onClick}>Close</button>

      <p>Email</p>
      <p>{event.target_name}</p>
    </td>
  </tr>
);

const TableRow: React.FC<TableRowProps> = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <DetailedView event={event} onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <RowView event={event} onClick={() => setIsOpen(!isOpen)} />
      )}
    </>
  );
};

export default TableRow;
