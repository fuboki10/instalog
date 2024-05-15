import React from 'react';
import TableRow from './TableRow';
import useSWR from 'swr';
import { Event } from '../../utils/types';
import LoadingTable from './LoadingTable';

interface TableBodyProps {
  page: number;
}

const PAGE_SIZE = 1;

const TableBody: React.FC<TableBodyProps> = ({ page }) => {
  const limit = PAGE_SIZE;
  const offset = page * limit;
  const { data, error, isLoading } = useSWR<Event[]>(
    `http://localhost:8080/events?limit=${limit}&offset=${offset}`,
    (url) => {
      return fetch(url).then((res) => res.json());
    },
    { refreshInterval: 5 * 1000 }
  );

  if (error) return <div>Error loading events</div>;

  return (
    <tbody className='min-w-full bg-white border-solid border-x-2 border-[#f5f5f5]'>
      {isLoading ? (
        <LoadingTable rows={PAGE_SIZE} />
      ) : (
        <>
          {data &&
            data?.map((event, index) => <TableRow event={event} key={index} />)}
        </>
      )}
    </tbody>
  );
};

export default TableBody;
