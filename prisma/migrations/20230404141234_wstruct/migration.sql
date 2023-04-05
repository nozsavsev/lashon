/*
  Warnings:

  - Added the required column `modifer_pattern` to the `Word` table without a default value. This is not possible if the table is not empty.
  - Added the required column `part_of_speech` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "modifer_pattern" TEXT NOT NULL,
ADD COLUMN     "part_of_speech" TEXT NOT NULL;
