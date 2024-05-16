-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "object" TEXT NOT NULL,
    "actor_id" TEXT NOT NULL,
    "actor_name" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "action_id" TEXT NOT NULL,
    "action_object" TEXT NOT NULL,
    "action_name" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "target_name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "occurred_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata_redirect" TEXT NOT NULL,
    "metadata_description" TEXT NOT NULL,
    "metadata_x_request_id" TEXT NOT NULL
);
