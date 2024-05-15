export interface Event {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action_id: string;
  action_object: string;
  action_name: string;
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: string;
  metadata_redirect: string;
  metadata_description: string;
  metadata_x_request_id: string;
}