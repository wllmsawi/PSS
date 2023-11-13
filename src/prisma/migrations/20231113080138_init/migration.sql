/*
  Warnings:

  - You are about to drop the column `customer_id` on the `cart` table. All the data in the column will be lost.
  - Added the required column `customer_name` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `Cart_customer_id_fkey`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `customer_id`,
    ADD COLUMN `customer_name` VARCHAR(191) NOT NULL;
