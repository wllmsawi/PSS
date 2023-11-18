/*
  Warnings:

  - You are about to drop the column `product_status` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `status_id` on the `product` table. All the data in the column will be lost.
  - Added the required column `product_status_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_status_id_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `product_status`,
    DROP COLUMN `status_id`,
    ADD COLUMN `product_status_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_product_status_id_fkey` FOREIGN KEY (`product_status_id`) REFERENCES `Status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
