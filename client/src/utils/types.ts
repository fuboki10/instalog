export interface Action {
  id: string;
  object: string;
  name: string;
}

export interface Metadata {
  redirect: string;
  description: string;
  x_request_id: string;
}

export interface Event {
  id: string;
  object: string;
  actor_id: string;
  actor_name: string;
  group: string;
  action: Action;
  target_id: string;
  target_name: string;
  location: string;
  occurred_at: Date;
  metadata: Metadata;
}