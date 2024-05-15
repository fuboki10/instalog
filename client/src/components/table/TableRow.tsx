import React, { useState } from 'react';
import { Event } from '../../utils/types';
import Hidden from '../utils/Hidden';

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
          className='h-8 w-8 text-[#a0a0a0] hover:text-[#666]'
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

const DetailedView: React.FC<ViewProps> = ({ event, onClick }) => {
  return (
    <tr>
      <td className='relative scale-110' colSpan={4}>
        <button className='absolute top-8 right-4' onClick={onClick}>
          <svg
            className='h-6 w-6 text-[#a0a0a0] hover:text-[#666]'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            stroke-width='2'
            stroke='currentColor'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' />{' '}
            <line x1='18' y1='6' x2='6' y2='18' />{' '}
            <line x1='6' y1='6' x2='18' y2='18' />
          </svg>
        </button>
        <div className='my-4 bg-white grid grid-cols-3 grid-rows-2 gap-4 rounded-xl border border-gray-300 py-6 px-6'>
          <div>
            <h4 className='text-[#a3a3a3]'>ACTOR</h4>
            <div className='mt-4 grid grid-cols-[5rem,auto] grid-rows-3 gap-y-2 text-sm'>
              <p className='text-[#b9b9b9]'>Name</p>
              <p className='truncate'>{event.actor_name}</p>
              <p className='text-[#b9b9b9]'>Email</p>
              <p className='truncate'>{event.target_name}</p>
              <p className='text-[#b9b9b9]'>ID</p>
              <p className='truncate'>{event.actor_id}</p>
            </div>
          </div>

          <div>
            <h4 className='text-[#a3a3a3]'>ACTION</h4>
            <div className='mt-4 grid grid-cols-[5rem,auto] grid-rows-3 gap-y-2 text-sm'>
              <p className='text-[#b9b9b9]'>Name</p>
              <p className='truncate'>{event.action_name}</p>
              <p className='text-[#b9b9b9]'>Object</p>
              <p className='truncate'>{event.action_object}</p>
              <p className='text-[#b9b9b9]'>ID</p>
              <p className='truncate'>{event.action_id}</p>
            </div>
          </div>

          <div>
            <h4 className='text-[#a3a3a3]'>DATE</h4>
            <div className='mt-4 grid grid-cols-[5rem,auto] grid-rows-3 gap-y-2 text-sm'>
              <p className='text-[#b9b9b9]'>Readable</p>
              <p className='truncate'>{event.occurred_at.toLocaleString()}</p>
            </div>
          </div>

          <div>
            <h4 className='text-[#a3a3a3]'>METADATA</h4>
            <div className='mt-4'>
              <Hidden>
                <div className='grid grid-cols-[5rem,auto] grid-rows-3 gap-y-2 text-sm'>
                  <p className='text-[#b9b9b9]'>Redirect</p>
                  <p className='truncate'>{event.metadata_redirect}</p>
                  <p className='text-[#b9b9b9]'>Description</p>
                  <p className='truncate'>{event.metadata_description}</p>
                  <p className='text-[#b9b9b9]'>Request ID</p>
                  <p className='truncate'>{event.metadata_x_request_id}</p>
                </div>
              </Hidden>
            </div>
          </div>

          <div>
            <h4 className='text-[#a3a3a3]'>TARGET</h4>
            <div className='mt-4'>
              <Hidden>
                <div className='mt-4 grid grid-cols-[5rem,auto] grid-rows-3 gap-y-2 text-sm'>
                  <p className='text-[#b9b9b9]'>Location</p>
                  <p className='truncate'>{event.location}</p>
                  <p className='text-[#b9b9b9]'>group</p>
                  <p className='truncate'>{event.group}</p>
                  <p className='text-[#b9b9b9]'>ID</p>
                  <p className='truncate'>{event.target_id}</p>
                </div>
              </Hidden>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

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
