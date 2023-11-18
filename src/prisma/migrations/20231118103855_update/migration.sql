/*
  Warnings:

  - You are about to drop the column `product_group_id` on the `product_category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_category` DROP FOREIGN KEY `Product_Category_product_group_id_fkey`;

-- AlterTable
ALTER TABLE `product_category` DROP COLUMN `product_group_id`;
