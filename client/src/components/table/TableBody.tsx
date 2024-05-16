import React from 'react';
import TableRow from './TableRow';
import useSWR from 'swr';
import { Event } from '../../utils/types';
import LoadingTable from './LoadingTable';

interface TableBodyProps {
  page: number;
  q?: string;
  live?: boolean;
}

const PAGE_SIZE = 3;

const TableBody: React.FC<TableBodyProps> = ({ page, q, live }) => {
  const limit = PAGE_SIZE;
  const offset = page * limit;
  const { data, error, isLoading } = useSWR<Event[]>(
    `${
      import.meta.env.VITE_API_URL || 'http://localhost:8080'
    }/events?limit=${limit}&offset=${offset}${q ? `&q=${q}` : ''}`,
    (url) => {
      return fetch(url).then((res) => res.json());
    },
    {
      refreshInterval: live ? 1000 : 0,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
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
