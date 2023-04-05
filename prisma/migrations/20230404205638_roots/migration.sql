/*
  Warnings:

  - You are about to drop the column `root` on the `Word` table. All the data in the column will be lost.
  - Added the required column `rootId` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Word" DROP COLUMN "root",
ADD COLUMN     "rootId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Root" (
    "id" SERIAL NOT NULL,
    "root" TEXT NOT NULL,

    CONSTRAINT "Root_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Root_root_key" ON "Root"("root");

-- AddForeignKey
ALTER TABLE "Word" ADD CONSTRAINT "Word_rootId_fkey" FOREIGN KEY ("rootId") REFERENCES "Root"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
