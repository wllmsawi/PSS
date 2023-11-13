/*
  Warnings:

  - You are about to drop the column `group_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `group` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `product_group_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_group_id_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `group_id`,
    ADD COLUMN `product_group_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `group`;

-- CreateTable
CREATE TABLE `ProductGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_group_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_product_group_id_fkey` FOREIGN KEY (`product_group_id`) REFERENCES `ProductGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
