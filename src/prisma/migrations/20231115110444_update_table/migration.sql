/*
  Warnings:

  - You are about to drop the column `branchId` on the `user` table. All the data in the column will be lost.
  - Added the required column `branch_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_branchId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `branchId`,
    ADD COLUMN `branch_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_branch_id_fkey` FOREIGN KEY (`branch_id`) REFERENCES `Branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
