/*
  Warnings:

  - You are about to drop the column `authorId` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `submittorId` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_authorId_fkey";

-- AlterTable
ALTER TABLE "Tweet" DROP COLUMN "authorId",
ADD COLUMN     "submittorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_submittorId_fkey" FOREIGN KEY ("submittorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
