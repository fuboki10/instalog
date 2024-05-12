import React from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import { Event } from '../utils/types';
import LoadMore from './LoadMore';
import useSWR from 'swr';

interface ActivityLogProps {}

const events: Event[] = [
  {
    id: 'evt_15B56WILKW5K',
    object: 'event',
    actor_id: 'user_3VG74289PUA2',
    actor_name: 'Ali Salah',
    group: 'instatus.com',
    action_id: 'evt_action_PGTD81NCAOQ2',
    action_object: 'event_action',
    action_name: 'user.login_succeeded',
    target_id: 'user_DOKVD1U3L030',
    target_name: 'ali@instatus.com',
    location: '105.40.62.95',
    occurred_at: new Date('2022-01-05T14:31:13.607Z'),
    metadata_redirect: '/setup',
    metadata_description: 'User login succeeded.',
    metadata_x_request_id: 'req_W1Y13QOHMI5H',
  },
  {
    id: 'evt_15B56WILKW6K',
    object: 'event',
    actor_id: 'user_3VG74289PUA2',
    actor_name: 'Ali Salah',
    group: 'instatus.com',
    action_id: 'evt_action_PGTD81NCAOQ2',
    action_object: 'event_action',
    action_name: 'user.login_succeeded',
    target_id: 'user_DOKVD1U3L030',
    target_name: 'ali@instatus.com',
    location: '105.40.62.95',
    occurred_at: new Date('2022-01-05T16:31:13.607Z'),
    metadata_redirect: '/setup',
    metadata_description: 'User login succeeded.',
    metadata_x_request_id: 'req_W1Y13QOHMI5H',
  },
];

const ActivityLog: React.FC<ActivityLogProps> = () => {
  const { data, error, isLoading } = useSWR(
    'http://localhost:8080/events',
    (url) => {
      return fetch(url).then((res) => res.json());
    },
    { refreshInterval: 5 * 1000 }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading events</div>;

  return (
    <div className='mx-auto max-w-[80%] my-16 rounded-xl bg-[#f5f5f5]'>
      <SearchBar />
      <Table events={data as Event[]} />
      <LoadMore />
    </div>
  );
};

export default ActivityLog;
