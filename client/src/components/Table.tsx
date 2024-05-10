import React from 'react';

interface TableProps {}

const Table: React.FC<TableProps> = () => {
  return (
    <table className='min-w-full'>
      <thead className='bg-[#f0f0f0] text-[#747474]'>
        <tr>
          <th className='px-6 py-4 text-start'>ACTOR</th>
          <th className='px-6 py-4 text-start'>ACTION</th>
          <th className='px-6 py-4 text-start'>DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
        </tr>
        <tr>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
        </tr>
        <tr>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
        </tr>
        <tr>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
          <td className='px-6 py-4 text-start'>Dummy</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
