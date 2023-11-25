/*
  Warnings:

  - The `genres` column on the `premiere` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `season` to the `premiere` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "premiere" DROP COLUMN "genres",
ADD COLUMN     "genres" VARCHAR[],
DROP COLUMN "season",
ADD COLUMN     "season" INTEGER NOT NULL;
