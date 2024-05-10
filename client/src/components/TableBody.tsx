import React from 'react';

interface TableBodyProps {}

const TableBody: React.FC<TableBodyProps> = () => {
  return (
    <tbody className='bg-white border-solid border-2 border-[#f5f5f5]'>
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
  );
};

export default TableBody;
