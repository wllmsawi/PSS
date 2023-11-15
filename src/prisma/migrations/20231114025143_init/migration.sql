/*
  Warnings:

  - You are about to drop the column `customer_id` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `transaction` DROP FOREIGN KEY `Transaction_customer_id_fkey`;

-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `customer_id`;

-- DropTable
DROP TABLE `customer`;
