/*
  Warnings:

  - You are about to drop the column `createdAt` on the `premiere` table. All the data in the column will be lost.
  - You are about to drop the column `currentEpisode` on the `premiere` table. All the data in the column will be lost.
  - You are about to drop the column `isAiring` on the `premiere` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `premiere` table. All the data in the column will be lost.
  - You are about to drop the column `totalEpisodes` on the `premiere` table. All the data in the column will be lost.
  - You are about to drop the column `weeklyDayAiring` on the `premiere` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "premiere" DROP COLUMN "createdAt",
DROP COLUMN "currentEpisode",
DROP COLUMN "isAiring",
DROP COLUMN "releaseDate",
DROP COLUMN "totalEpisodes",
DROP COLUMN "weeklyDayAiring",
ADD COLUMN     "created_at" DATE DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "current_episode" INTEGER,
ADD COLUMN     "is_airing" BOOLEAN,
ADD COLUMN     "release_date" DATE,
ADD COLUMN     "total_episodes" INTEGER,
ADD COLUMN     "weekly_day_airing" VARCHAR,
ALTER COLUMN "title" SET DATA TYPE VARCHAR,
ALTER COLUMN "path_image" DROP NOT NULL,
ALTER COLUMN "path_image" SET DATA TYPE VARCHAR,
ALTER COLUMN "genres" DROP NOT NULL,
ALTER COLUMN "genres" SET DATA TYPE VARCHAR,
ALTER COLUMN "streaming" DROP NOT NULL,
ALTER COLUMN "streaming" SET DATA TYPE VARCHAR,
ALTER COLUMN "season" DROP NOT NULL,
ALTER COLUMN "season" SET DATA TYPE VARCHAR,
ALTER COLUMN "likes" DROP NOT NULL,
ALTER COLUMN "deslikes" DROP NOT NULL;

-- RenameIndex
ALTER INDEX "admin_email_key" RENAME TO "unique_email";
