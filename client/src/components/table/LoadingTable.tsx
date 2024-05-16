import React from 'react';

interface LoadingTableProps {
  rows: number;
}

const LoadingTable: React.FC<LoadingTableProps> = ({ rows }) => {
  const rowsArray = Array.from({ length: rows }, (_, i) => i);
  return (
    <>
      {rowsArray.map((row) => (
        <tr key={row} className='animate-pulse m-16'>
          <td className='flex gap-3 items-center px-6 py-4'>
            <div className='h-7 w-7 bg-gray-200 rounded-full' />
            <div className='box-content h-4 w-1/2 bg-gray-200' />
          </td>
          <td className='px-6 py-4'>
            <div className='box-content h-4 w-1/2 bg-gray-200' />
          </td>
          <td className='px-6 py-4'>
            <div className='box-content h-4 w-1/2 bg-gray-200' />
          </td>
          <td />
        </tr>
      ))}
    </>
  );
};

export default LoadingTable;
