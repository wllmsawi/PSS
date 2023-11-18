/*
  Warnings:

  - Added the required column `status_id` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_group_id` to the `Product_Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `status_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product_category` ADD COLUMN `product_group_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status_name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_status_id_fkey` FOREIGN KEY (`status_id`) REFERENCES `Status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_Category` ADD CONSTRAINT `Product_Category_product_group_id_fkey` FOREIGN KEY (`product_group_id`) REFERENCES `Product_Group`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
