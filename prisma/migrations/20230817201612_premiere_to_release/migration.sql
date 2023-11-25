/*
  Warnings:

  - You are about to drop the `premiere` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "premiere";

-- CreateTable
CREATE TABLE "release" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "path_image" VARCHAR,
    "genres" VARCHAR[],
    "streaming" VARCHAR,
    "total_episodes" INTEGER,
    "current_episode" INTEGER,
    "release_date" DATE,
    "is_airing" BOOLEAN,
    "season" INTEGER NOT NULL,
    "weekly_day_airing" VARCHAR,
    "likes" INTEGER,
    "deslikes" INTEGER,
    "created_at" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "release_pkey" PRIMARY KEY ("id")
);
