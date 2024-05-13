import React from 'react';
import TableRow from './TableRow';
import useSWR from 'swr';
import { Event } from '../utils/types';

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading events</div>;

  return (
    <tbody className='bg-white border-solid border-x-2 border-[#f5f5f5]'>
      {data &&
        data?.map((event, index) => <TableRow event={event} key={index} />)}
    </tbody>
  );
};

export default TableBody;
